#!/usr/bin/env sh

yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:EvelynWXY/big-screen-01-website.git &&
git push -uf origin master:gh-pages &&
cd -;