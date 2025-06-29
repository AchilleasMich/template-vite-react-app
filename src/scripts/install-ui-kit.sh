#!/usr/bin/env bash

set -e

UIKIT_DIR="src/ui-kit"
UIKIT_REPO="https://github.com/AchilleasMich/ui-kit.git"

echo "🔧 Setting up UI Kit..."

# Add submodule if missing
if [ ! -d "$UIKIT_DIR" ]; then
  echo "🔧 Adding UI Kit submodule..."
  git submodule add $UIKIT_REPO $UIKIT_DIR
else
  echo "🔧 Updating UI Kit submodule..."
  git submodule update --init --recursive
  cd $UIKIT_DIR
  git pull origin main
  cd -
fi

# Install UI kit dependencies
echo "📦 Installing UI Kit dependencies..."
cd $UIKIT_DIR
npm install

# Build UI Kit
echo "🔨 Building UI Kit..."
npm run build

cd -

echo "✅ UI Kit ready at $UIKIT_DIR."