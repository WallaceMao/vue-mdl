#! /bin/bash
br=$(git rev-parse --abbrev-ref HEAD)
git checkout gh-pages && \
git pull --rebase || exit 1

if ! git config user.email || ! git config user.name; then
  git config user.email "i@posva.net"
  git config user.name "Circle CI"
fi

git pull --rebase && \
git merge -X theirs --no-edit $br && \
npm run doc && \
cp doc/index.html . && \
cp -rf node_modules/material-design-lite/dist/images . && \
git add index.html doc-bundle.js images && \
git commit -a --amend --no-edit && \
git push origin gh-pages && \
git checkout $br || exit 1
