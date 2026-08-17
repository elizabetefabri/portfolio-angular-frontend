import { Client } from 'basic-ftp';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Carrega as variaveis de .env.deployment ou usa os defaults do projeto
const loadConfig = () => {
  const envPath = path.join(__dirname, '..', '.env.deployment');
  const defaults = {
    host: 'ftp.elizabetesousafabri.com.br',
    user: 'u485760756.elizabetefabri',
    password: 'Eliza1Bip*',
    port: 21,
    // Altere para '/public_html/' se for subir no dominio raiz,
    // ou '/public_html/studypanel/' para o subdominio studypanel.
    remotePath: '/public_html/',
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

async function deploy() {
  const client = new Client();
  client.ftp.verbose = true;

  try {
    const config = loadConfig();

    console.log('\n Conectando ao servidor FTP...');
    console.log(` Host: ${config.host}`);
    console.log(` Porta: ${config.port}`);
    console.log(` Usuário: ${config.user}`);
    console.log(` Remoto: ${config.remotePath}`);
    console.log(` Local: ${config.localPath}`);

    if (!fs.existsSync(config.localPath)) {
      throw new Error(
        `Diretorio local nao encontrado: ${config.localPath}\n` +
          'Execute "npm run build" antes do deploy.',
      );
    }

    await client.access({
      host: config.host,
      user: config.user,
      password: config.password,
      port: config.port,
      secure: false,
    });

    console.log(' Conectado ao servidor FTP!\n');

    console.log(` Navegando para: ${config.remotePath}`);
    await client.ensureDir(config.remotePath);
    await client.cd(config.remotePath);

    console.log(' Limpando diretorio remoto...');
    await client.clearWorkingDir();

    console.log(` Enviando arquivos de ${config.localPath}...`);
    await client.uploadFromDir(config.localPath);

    console.log('\n Deploy concluido com sucesso!');
    console.log(' Acesse seu dominio para validar.\n');
  } catch (err) {
    if (err instanceof Error) {
      console.error('\n Erro no deploy:', err.message);
    } else {
      console.error('\n Erro desconhecido:', err);
    }
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
