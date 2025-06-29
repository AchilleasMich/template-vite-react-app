#!/usr/bin/env bash

set -e

UIKIT_DIR="src/ui-kit"
UIKIT_REPO="https://github.com/AchilleasMich/ui-kit.git"

if [ ! -d ".git" ]; then
  echo "🛠️ No git repository found. Initializing..."
  git init
fi

# Remove existing submodule cleanly
if [ -d "$UIKIT_DIR" ]; then
  echo "🗑️ Removing existing UI Kit submodule..."
  git submodule deinit -f $UIKIT_DIR
  git rm -f $UIKIT_DIR
  rm -rf .git/modules/$UIKIT_DIR
  rm -rf $UIKIT_DIR
fi

echo "🔧 Adding fresh UI Kit submodule..."
git submodule add $UIKIT_REPO $UIKIT_DIR

echo "🔧 Initializing and updating UI Kit submodule..."
git submodule update --init --recursive

echo "📦 Installing UI Kit dependencies..."
cd $UIKIT_DIR
npm install

echo "🔨 Building UI Kit..."
npm run build

cd -

echo "✅ UI Kit re-installed and ready at $UIKIT_DIR."