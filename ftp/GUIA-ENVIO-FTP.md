# Guia de envio via FTP (Hostinger)

Este guia descreve a solucao testada e aprovada para fazer deploy do portfolio Angular no domínio `elizabetesousafabri.com.br`.

## 1. O problema que resolvimos

O domínio na Hostinger aponta para a **raiz do FTP (`/`)**, nao para `public_html`. A pasta `public_html` existia, mas nao era usada pelo site principal. A raiz continha um site antigo em Next.js que conflitava com as rotas do Angular.

A solucao correta e:

1. Fazer deploy na **raiz do FTP (`/`)**.
2. Remover o conteudo antigo do Next.js (`_next`, `projects`, `dashboard`, `login`, `images` antiga etc.).
3. Proteger pastas de subdominios (`comandaflow`, `studypanel`, `api`, `docs`).
4. Manter o `.htaccess` para o Angular SPA funcionar em rotas internas.

## 2. Dados de acesso

Crie o arquivo `.env.deployment` na raiz do projeto a partir do exemplo:

```bash
cp .env.deployment.example .env.deployment
```

Conteudo recomendado para o domínio raiz:

```
FTP_HOST=ftp.elizabetesousafabri.com.br
FTP_USER=u485760756.elizabetefabri
FTP_PASSWORD=Eliza1Bip*
FTP_PORT=21
FTP_REMOTE_PATH=/
FTP_LOCAL_PATH=dist/frontend/browser
```

| Campo        | Valor                            |
| ------------ | -------------------------------- |
| Host         | `ftp.elizabetesousafabri.com.br` |
| Usuario      | `u485760756.elizabetefabri`      |
| Senha        | `Eliza1Bip*`                     |
| Porta        | `21`                             |
| Destino raiz | `/`                              |

> O arquivo `.env.deployment` está no `.gitignore` e nao será commitado.

## 3. Destinos comuns

| Destino                                              | `FTP_REMOTE_PATH` |
| ---------------------------------------------------- | ----------------- |
| Domínio raiz (`elizabetesousafabri.com.br`)          | `/`               |
| Subdomínio (`studypanel.elizabetesousafabri.com.br`) | `/studypanel`     |
| Pasta de testes                                      | `/public_html`    |

## 4. Build de producao

```bash
npm run build
```

O resultado estará em `dist/frontend/browser`. Verifique se `.htaccess` existe:

```bash
ls -la dist/frontend/browser/.htaccess
```

## 5. Executar o deploy

```bash
npm run deploy:ftp
```

O script `scripts/deploy.mjs` faz:

1. Conecta ao FTP da Hostinger.
2. Limpa o destino informado em `FTP_REMOTE_PATH`.
3. Na raiz (`/`), **protege** as pastas `comandaflow`, `studypanel`, `api`, `docs` e `public_html`.
4. Remove o restante (arquivos antigos do Next.js, pastas conflitantes etc.).
5. Envia o conteudo de `dist/frontend/browser`.
6. Verifica se `index.html` e `.htaccess` foram enviados.

## 6. Limpar cache do CDN

A Hostinger utiliza o HCDN. Após o deploy, limpe o cache pelo painel:

1. Acesse `https://hpanel.hostinger.com`.
2. Vá em **Performance → CDN**.
3. Clique em **Purge cache** (ou **Flush cache**).

Se nao tiver acesso, o cache expira sozinho em alguns minutos. Para testar antes do cache expirar:

- Abra o site em **janela anônima**.
- Use query string: `https://elizabetesousafabri.com.br/?nocache=1`.

## 7. Verificar se funcionou

Comandos uteis:

```bash
# Verifica se o index.html carrega
curl -s https://elizabetesousafabri.com.br | head -n 10

# Verifica se o main.js carrega
curl -s https://elizabetesousafabri.com.br/main-7LLJKW5Y.js | head -c 50

# Verifica se rotas internas funcionam (deve retornar o index.html)
curl -s https://elizabetesousafabri.com.br/projects/caderno-inteligente | head -n 10
```

## 8. O que muda no site

- A raiz `/` redireciona automaticamente para `/projects/portfolio-personal`.
- As rotas de projeto funcionam, ex: `/projects/caderno-inteligente`.
- O carrossel, as tabs e os icones Lucide estão no ar.

## 9. Cuidados

- **Nunca use `FTP_REMOTE_PATH=/` sem o `.env.deployment` configurado.** O deploy limpa o destino.
- As pastas `comandaflow`, `studypanel`, `api`, `docs` e `public_html` sao protegidas, mas todo o resto na raiz sera removido.
- Se quiser preservar algum arquivo na raiz, mova-o para `public_html` ou adicione no script `scripts/deploy.mjs` em `PROTECTED_DIRS`.

## 10. Fluxo resumido

1. `npm run build`
2. Confira `dist/frontend/browser/.htaccess`
3. Verifique `.env.deployment` (destino `/` para domínio raiz)
4. `npm run deploy:ftp`
5. Limpe o cache do CDN no painel da Hostinger
6. Acesse `https://elizabetesousafabri.com.br` e valide
