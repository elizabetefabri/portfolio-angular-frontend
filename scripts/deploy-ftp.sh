#!/usr/bin/env bash
set -e

# Build de producao
npm run build

# Dados de acesso FTP (Hostinger)
FTP_HOST="195.200.3.30"
FTP_USER="u485760756.elizabetefabri"
FTP_PASS="Eliza1Bip*"
FTP_PORT="21"
REMOTE_DIR="/public_html"
LOCAL_DIR="dist/frontend/browser"

echo "Iniciando deploy via FTP..."
echo "Host: $FTP_HOST"
echo "Remoto: $REMOTE_DIR"
echo "Local: $LOCAL_DIR"

# Limpa o diretorio remoto e faz upload
lftp -u "$FTP_USER,$FTP_PASS" "ftp://$FTP_HOST:$FTP_PORT" <<EOF
set ssl:verify-certificate no
set ftp:ssl-allow yes
set ftp:ssl-protect-data yes
set ftp:ssl-protect-list yes
rm -r $REMOTE_DIR
mkdir -p $REMOTE_DIR
lcd $LOCAL_DIR
lcd .
mirror -R . $REMOTE_DIR
bye
EOF

echo "Deploy concluido!"
