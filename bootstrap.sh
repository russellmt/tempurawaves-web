#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

MODE="${1:-dev}"

echo "Installing dependencies..."
npm install

echo "Generating placeholder images..."
node scripts/generate-placeholders.mjs

case "$MODE" in
  dev)
    echo "Starting development server..."
    npm run dev
    ;;
  build)
    echo "Building for production..."
    npm run build
    ;;
  preview)
    echo "Building and previewing..."
    npm run build
    npm run preview
    ;;
  *)
    echo "Usage: ./bootstrap.sh [dev|build|preview]"
    exit 1
    ;;
esac
