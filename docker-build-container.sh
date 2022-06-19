#!/usr/bin/env bash

docker build -t ivayloc/bens-bingo-app:latest .
cat ./docker-access-token.txt | docker login --username ivayloc --password-stdin
docker push ivayloc/bens-bingo-app:latest