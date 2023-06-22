#!/usr/bin/env sh

docker-compose build --no-cache
docker-compose up
yarn dev
