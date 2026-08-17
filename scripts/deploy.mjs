import { Client } from 'basic-ftp';
import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Pastas que nunca serao apagadas na raiz do FTP.
// Elas correspondem a subdominios ou projetos independentes.
const PROTECTED_DIRS = new Set(['comandaflow', 'studypanel', 'api', 'docs', 'public_html']);

const loadConfig = () => {
  const envPath = path.join(__dirname, '..', '.env.deployment');
  const defaults = {
    host: 'ftp.elizabetesousafabri.com.br',
    user: 'u485760756.elizabetefabri',
    password: 'Eliza1Bip*',
    port: 21,
    // '/'  = dominio raiz (site principal)
    // '/public_html' = pasta para testes
    // '/public_html/studypanel' = subdominio studypanel
    remotePath: '/',
    localPath: path.join(__dirname, '..', 'dist', 'frontend', 'browser'),
  };

  if (!fs.existsSync(envPath)) {
    return defaults;
  }

  const envContent = fs.readFileSync(envPath, 'utf-8');
  const env = {};

  envContent.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split('=');
    const value = valueParts.join('=');
    if (key && value) {
      env[key.trim()] = value.trim();
    }
  });

  return {
    host: env.FTP_HOST || defaults.host,
    user: env.FTP_USER || defaults.user,
    password: env.FTP_PASSWORD || defaults.password,
    port: parseInt(env.FTP_PORT || defaults.port, 10),
    remotePath: env.FTP_REMOTE_PATH || defaults.remotePath,
    localPath: env.FTP_LOCAL_PATH || defaults.localPath,
  };
};

const formatBytes = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / k ** i).toFixed(2)) + ' ' + sizes[i];
};

async function listDir(client, dir) {
  try {
    return await client.list(dir);
  } catch (err) {
    return [];
  }
}

async function cleanTarget(client, remotePath) {
  const list = await listDir(client, remotePath);
  const root = remotePath === '/';

  for (const item of list) {
    if (item.name === '.' || item.name === '..') continue;

    // Na raiz, protege subdominios e pastas de dados
    if (root && PROTECTED_DIRS.has(item.name)) {
      console.log(`  Mantido (protegido): ${item.name}`);
      continue;
    }

    const fullPath = path.posix.join(remotePath, item.name);
    try {
      if (item.isDirectory) {
        // removeDir apaga o diretorio e todo o conteudo recursivamente
        await client.removeDir(fullPath);
      } else {
        await client.remove(fullPath);
      }
      console.log(`  Removido: ${item.name}`);
    } catch (err) {
      console.warn(`  Aviso: nao foi possivel remover ${item.name} — ${err.message}`);
    }
  }
}

async function deploy() {
  const client = new Client();
  client.ftp.verbose = true;

  try {
    const config = loadConfig();

    console.log('\n=== DEPLOY HOSTINGER ===');
    console.log(`Host: ${config.host}`);
    console.log(`Porta: ${config.port}`);
    console.log(`Usuario: ${config.user}`);
    console.log(`Remoto: ${config.remotePath}`);
    console.log(`Local: ${config.localPath}\n`);

    if (!fs.existsSync(config.localPath)) {
      throw new Error(
        `Diretorio local nao encontrado: ${config.localPath}\n` +
          'Execute "npm run build" antes do deploy.',
      );
    }

    const stats = fs.statSync(config.localPath);
    if (!stats.isDirectory()) {
      throw new Error(`${config.localPath} nao e um diretorio.`);
    }

    console.log('Conectando ao servidor FTP...');
    await client.access({
      host: config.host,
      user: config.user,
      password: config.password,
      port: config.port,
      secure: false,
    });
    console.log('Conectado com sucesso!\n');

    console.log(`Garantindo diretorio remoto: ${config.remotePath}`);
    if (config.remotePath !== '/') {
      await client.ensureDir(config.remotePath);
    }
    await client.cd(config.remotePath);

    console.log('\nLimpando destino...');
    await cleanTarget(client, config.remotePath);

    console.log(`\nEnviando arquivos de ${config.localPath}...`);
    await client.uploadFromDir(config.localPath, config.remotePath);

    console.log('\nVerificando arquivos no servidor...');
    const listAfter = await listDir(client, config.remotePath);
    const hasIndex = listAfter.some((item) => item.name === 'index.html');
    const hasHtaccess = listAfter.some((item) => item.name === '.htaccess');

    if (!hasIndex) {
      throw new Error('index.html nao foi encontrado no servidor apos o upload.');
    }

    if (!hasHtaccess) {
      console.warn('Aviso: .htaccess nao encontrado. Rotas internas podem dar 404.');
    }

    const totalSize = listAfter
      .filter((item) => item.isFile)
      .reduce((acc, item) => acc + (item.size || 0), 0);

    console.log(`\nArquivos no destino: ${listAfter.length}`);
    console.log(`Tamanho total: ${formatBytes(totalSize)}`);
    console.log('\nDeploy concluido com sucesso!');
    console.log(`Acesse: https://${config.host.replace(/^ftp\./, '')}`);
    console.log('\nIMPORTANTE:');
    console.log('1. Limpe o cache do CDN no painel da Hostinger (Performance -> CDN -> Purge).');
    console.log('2. Acesse o site em aba anonima para evitar cache do navegador.\n');
  } catch (err) {
    if (err instanceof Error) {
      console.error('\nErro no deploy:', err.message);
    } else {
      console.error('\nErro desconhecido:', err);
    }
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
