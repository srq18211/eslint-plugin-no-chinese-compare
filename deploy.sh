#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

git add -A
git commit -m 'deploy'

git push -u origin master

cd -