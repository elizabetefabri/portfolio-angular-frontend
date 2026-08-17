# Guia de envio via FTP (VS Code)

Este guia explica como enviar o build do frontend para o servidor usando o plugin **SFTP** no VS Code.

## 1. O que enviar

O Angular gera o build de produção em duas pastas:

```
dist/frontend/browser   <- arquivos estaticos (HTML, CSS, JS, imagens)
dist/frontend/server    <- servidor SSR (nao enviar)
```

**O upload deve ser feito apenas do conteudo de `dist/frontend/browser` para a pasta `public_html` do servidor.**

## 2. Plugin recomendado

Extensao: **SFTP** por **Natizyskunk**  
ID no marketplace: `Natizyskunk.sftp`

Instalacao:

1. Abra o VS Code.
2. Pressione `Ctrl + Shift + X` (ou `Cmd + Shift + X` no macOS) para abrir as extensões.
3. Busque por `SFTP` e instale a extensao de **Natizyskunk**.

## 3. Dados de acesso (Hostinger)

As credenciais estao registradas em `ftp/contas-ftp.md` e resumidas abaixo:

| Campo        | Valor                            |
| ------------ | -------------------------------- |
| Host         | `195.200.3.30`                   |
| Usuario      | `u485760756.elizabetefabri`      |
| Senha        | `Eliza1Bip*`                     |
| Porta        | `21`                             |
| Pasta remota | `public_html`                    |
| Hostname     | `ftp.elizabetesousafabri.com.br` |

## 4. Configurar o SFTP no VS Code

Na raiz do projeto (`portfolio-angular-frontend/`), crie ou edite o arquivo `.vscode/sftp.json` com o conteudo abaixo:

```json
{
  "name": "Hostinger - Portfolio",
  "host": "195.200.3.30",
  "protocol": "ftp",
  "port": 21,
  "username": "u485760756.elizabetefabri",
  "password": "Eliza1Bip*",
  "remotePath": "/public_html",
  "uploadOnSave": false,
  "useTempFile": false,
  "openSsh": false,
  "context": "dist/frontend/browser",
  "ignore": [".git", ".env", "node_modules", "src", "docs", "ftp", "*.md", "*.spec.ts", ".vscode"]
}
```

> Atencao: mantenha o arquivo `sftp.json` fora do controle de versao. Ele pode conter senhas.

### Pontos importantes da configuracao

- `context`: indica a pasta local que sera enviada. Use sempre `dist/frontend/browser`.
- `remotePath`: destino no servidor. Use `/public_html`.
- O `.htaccess` ja esta dentro de `dist/frontend/browser` e sera enviado junto.

## 5. Gerar o build de producao

Antes de enviar, sempre gere o build atualizado:

```bash
npm run build
```

O resultado estará em:

```
dist/frontend/browser
```

Verifique se o arquivo `.htaccess` foi gerado na pasta:

```bash
ls -la dist/frontend/browser/.htaccess
```

Se nao existir, confira se `src/.htaccess` esta no projeto e se `angular.json` inclui ele em `assets`.

## 6. Enviar os arquivos para o servidor

### Opção A — Upload da pasta completa (recomendado)

1. Execute o build:

   ```bash
   npm run build
   ```

2. Abra a paleta de comandos (`Ctrl + Shift + P` ou `Cmd + Shift + P`).
3. Digite e selecione: `SFTP: Upload Folder`.
4. O VS Code enviara todo o conteudo de `dist/frontend/browser` para `public_html`.

### Opção B — Script de deploy automatico

Se tiver o `lftp` instalado, execute:

```bash
bash scripts/deploy-ftp.sh
```

Esse script:

1. Roda `npm run build`.
2. Conecta ao FTP.
3. Remove o conteudo antigo de `public_html`.
4. Envia o conteudo de `dist/frontend/browser`.

## 7. Limpar cache do CDN (importante)

O domínio utiliza um CDN da Hostinger. Mesmo apos o upload correto, o site antigo pode continuar aparecendo por cache.

Acesse o painel da Hostinger e procure por:

- **Cache → Limpar cache**
- Ou **Performance → CDN → Purge cache**

Se nao tiver acesso, aguarde de 10 a 60 minutos ou acesse com `?nocache=1` no final da URL.

## 8. Verificar o deploy

Acesse o dominio para confirmar que a nova versao esta no ar:

```
https://elizabetesousafabri.com.br
```

A rota raiz (`/`) redireciona automaticamente para `/projects/portfolio-personal`.

Teste tambem rotas internas, como:

```
https://elizabetesousafabri.com.br/projects/caderno-inteligente
```

Se aparecer erro 404, o `.htaccess` nao foi enviado ou o mod_rewrite nao esta ativado. Entre em contato com o suporte da Hostinger.

## 9. Subdomínios / Vercel

Os domínios adicionais (comandaflow, studypanel, api etc.) estao registrados em `ftp/elizabetesousafabri.com.br.txt`.  
Para projetos no **Vercel**, crie a documentacao de domínios separadamente e aponte os registros DNS conforme necessário.

## 10. Fluxo resumido

1. `npm run build`
2. Confira se `dist/frontend/browser/.htaccess` existe
3. Configure `.vscode/sftp.json` (uma vez)
4. `SFTP: Upload Folder` a partir de `dist/frontend/browser`
5. Confirme destino `public_html`
6. Limpe o cache do CDN no painel da Hostinger
7. Acesse o dominio e valide
