# Formbuilder API - (express.js) project

### Installation guides

> Let's use a stale nodejs version (LTS)

_Our backend project docs_ [Notion Link](https://blush-schooner-a3d.notion.site/Formbuilder-API-Docs-efffff8e68e748d38242be4ea7182792?pvs=4)

```yaml
node-version: 18.x
package-manager: yarn@1.22.19 (default)
```

=> Install dependencies

```sh
$ yarn install
```

=> Run the development server

```sh
$ yarn dev
```

=> Run the development server with docker

```sh
$ yarn dev:docker
```

=> Build this application

```sh
$ yarn build
```

=> Run production (mode) server

```sh
$ yarn start
```

or

```sh
$ yarn build
$ yarn start:prod
```

> For Docker user specific, we have `mongodb` and `redis` container as server instance.

Docker/MongoDB server `mongodb://localhost:27017/<db_name>`

Docker/Redis server `redis://localhost:6379/<redis_store_name>`
