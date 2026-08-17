# Guia de envio via FTP (VS Code)

Este guia explica como enviar o build do frontend para o servidor usando o plugin **SFTP** no VS Code.

## 1. Plugin recomendado

Extensão: **SFTP** por **Natizyskunk**  
ID no marketplace: `Natizyskunk.sftp`

Instalação:

1. Abra o VS Code.
2. Pressione `Ctrl + Shift + X` (ou `Cmd + Shift + X` no macOS) para abrir as extensões.
3. Busque por `SFTP` e instale a extensão de **Natizyskunk**.

## 2. Dados de acesso (Hostinger)

As credenciais estão registradas em `ftp/contas-ftp.md` e resumidas abaixo:

| Campo        | Valor                            |
| ------------ | -------------------------------- |
| Host         | `195.200.3.30`                   |
| Usuário      | `u485760756.elizabetefabri`      |
| Senha        | `Eliza1Bip*`                     |
| Porta        | `21`                             |
| Pasta remota | `public_html`                    |
| Hostname     | `ftp.elizabetesousafabri.com.br` |

## 3. Configurar o SFTP no VS Code

Na raiz do projeto (`portfolio-angular-frontend/`), crie ou edite o arquivo `.vscode/sftp.json` com o conteúdo abaixo:

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
  "ignore": [".git", ".env", "node_modules", "src", "docs", "ftp", "*.md", "*.spec.ts", ".vscode"]
}
```

> Atenção: mantenha o arquivo `sftp.json` fora do controle de versão. Ele pode conter senhas.

## 4. Gerar o build de produção

Antes de enviar, sempre gere o build atualizado:

```bash
npm run build
```

O resultado estará na pasta:

```
dist/frontend
```

## 5. Enviar os arquivos para o servidor

### Opção A — Upload da pasta completa (recomendado)

1. Abra a paleta de comandos (`Ctrl + Shift + P` ou `Cmd + Shift + P`).
2. Digite e selecione: `SFTP: Upload Folder`.
3. Escolha a pasta `dist/frontend` do projeto.
4. Confirme o destino remoto `public_html`.

### Opção B — Upload automático ao salvar

Se quiser sincronizar arquivos individuais, altere `uploadOnSave` para `true`.  
Recomendado apenas para ajustes pontuais, nunca para deploy inicial.

## 6. Verificar o deploy

Acesse o domínio para confirmar que a nova versão está no ar:

```
https://elizabetesousafabri.com.br
```

## 7. Subdomínios / Vercel

Os domínios adicionais (comandaflow, studypanel, api etc.) estão registrados em `ftp/elizabetesousafabri.com.br.txt`.  
Para projetos no **Vercel**, crie a documentação de domínios separadamente e aponte os registros DNS conforme necessário.

## 8. Fluxo resumido

1. `npm run build`
2. Configure `.vscode/sftp.json` (uma vez)
3. `SFTP: Upload Folder` → selecione `dist/frontend`
4. Confirme destino `public_html`
5. Acesse o domínio e valide
