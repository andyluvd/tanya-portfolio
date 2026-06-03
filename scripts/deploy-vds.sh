#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOST="${VDS_HOST:-vds-portfolio}"
REMOTE_DIR="/var/www/tanya"

export PATH="${NODE_PATH:-/Users/andre/ОФЛАЙН/1project/.tools/node/bin}:$PATH"

echo "==> build"
cd "$ROOT"
npm run build

echo "==> upload to $HOST:$REMOTE_DIR"
ssh "$HOST" "mkdir -p $REMOTE_DIR"
rsync -avz --delete "$ROOT/out/" "$HOST:$REMOTE_DIR/"

echo "==> reload nginx"
ssh "$HOST" "nginx -t && systemctl reload nginx"

echo "==> done: http://109.172.94.218/"
