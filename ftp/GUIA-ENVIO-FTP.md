# Guia de envio via FTP

Este guia explica como enviar o build do frontend para o servidor usando o script `scripts/deploy.mjs` (Node + `basic-ftp`) ou o plugin **SFTP** no VS Code.

## 1. O que enviar

O Angular gera o build de producao em duas pastas:

```
dist/frontend/browser   <- arquivos estaticos (HTML, CSS, JS, imagens)
dist/frontend/server    <- servidor SSR (nao enviar)
```

**O upload deve ser feito apenas do conteudo de `dist/frontend/browser` para a pasta correta no servidor.**

## 2. Dados de acesso (Hostinger)

| Campo   | Valor                            |
| ------- | -------------------------------- |
| Host    | `ftp.elizabetesousafabri.com.br` |
| Usuario | `u485760756.elizabetefabri`      |
| Senha   | `Eliza1Bip*`                     |
| Porta   | `21`                             |

Caminhos comuns:

| Destino                                              | Exemplo de `FTP_REMOTE_PATH` |
| ---------------------------------------------------- | ---------------------------- |
| Domínio raiz (`elizabetesousafabri.com.br`)          | `/public_html/`              |
| Subdomínio (`studypanel.elizabetesousafabri.com.br`) | `/public_html/studypanel/`   |

## 3. Configurar o deploy

Crie o arquivo `.env.deployment` na raiz do projeto a partir do exemplo:

```bash
cp .env.deployment.example .env.deployment
```

Edite o arquivo com o destino desejado:

```
FTP_HOST=ftp.elizabetesousafabri.com.br
FTP_USER=u485760756.elizabetefabri
FTP_PASSWORD=Eliza1Bip*
FTP_PORT=21
FTP_REMOTE_PATH=/public_html/
FTP_LOCAL_PATH=dist/frontend/browser
```

> O arquivo `.env.deployment` está no `.gitignore` e nao será commitado.

## 4. Build de producao

```bash
npm run build
```

Verifique se `dist/frontend/browser/.htaccess` existe:

```bash
ls -la dist/frontend/browser/.htaccess
```

Se nao existir, confira se `src/.htaccess` esta no projeto e se `angular.json` inclui ele em `assets`.

## 5. Executar o deploy

```bash
npm run deploy:ftp
```

Esse comando roda `node scripts/deploy.mjs` e faz:

1. Conecta no FTP.
2. Garante que o diretorio remoto existe.
3. **Limpa** o diretorio remoto (remove arquivos antigos).
4. Envia o conteudo de `dist/frontend/browser`.

## 6. Deploy pelo VS Code (alternativa)

Se preferir o plugin **SFTP**:

1. Instale a extensao `Natizyskunk.sftp`.
2. Configure `.vscode/sftp.json`:

```json
{
  "name": "Hostinger - Portfolio",
  "host": "ftp.elizabetesousafabri.com.br",
  "protocol": "ftp",
  "port": 21,
  "username": "u485760756.elizabetefabri",
  "password": "Eliza1Bip*",
  "remotePath": "/public_html",
  "context": "dist/frontend/browser",
  "uploadOnSave": false
}
```

3. Use `SFTP: Upload Folder` e escolha `dist/frontend/browser`.

## 7. Cache do CDN (muito importante)

O domínio `elizabetesousafabri.com.br` e o subdomínio `studypanel` usam o CDN da Hostinger (`*.cdn.hstgr.net`). Mesmo com o upload correto, o conteudo antigo pode continuar no ar por cache.

Acoes necessarias:

1. Acesse o painel da Hostinger.
2. Vá em **Cache → Limpar cache** ou **Performance → CDN → Purge cache**.
3. Como alternativa, mude os registros DNS de `ALIAS`/`CNAME` do domínio para um `A` apontando diretamente para o IP do servidor (`195.200.3.30`).

## 8. Verificar o deploy

Apos o upload e limpeza de cache:

```
https://elizabetesousafabri.com.br
```

A rota `/` redireciona para `/projects/portfolio-personal`.

Teste uma rota interna:

```
https://elizabetesousafabri.com.br/projects/caderno-inteligente
```

## 9. Problemas comuns

### Upload feito, mas site nao mudou

- O conteudo foi enviado para a pasta errada (`/public_html` vs `/public_html/studypanel`).
- O cache do CDN ainda nao foi limpo.
- O dominio esta configurado como `ALIAS` para o CDN em vez de apontar diretamente para o servidor FTP.

### Arquivos de projeto no `public_html`

Se a pasta `public_html` contem `package.json`, `tsconfig.json` etc., o upload anterior enviou a raiz do projeto. O novo deploy limpa o destino e envia apenas o build.

### Erro de conexao no FTP

- Confirme usuario e senha.
- Verifique se a senha contem caracteres especiais; se sim, coloque entre aspas no `.env.deployment`.
- A Hostinger pode exigir conexao explicita (porta 21, `secure: false`).

## 10. Fluxo resumido

1. `npm run build`
2. Confira se `dist/frontend/browser/.htaccess` existe
3. Configure `.env.deployment`
4. `npm run deploy:ftp`
5. Limpe o cache do CDN no painel da Hostinger
6. Acesse o dominio e valide
