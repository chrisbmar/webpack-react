# Webpack and React setup

A base file structure with an eslint and prettier config. The webpack config has been adjusted to work with scss modules. Husky is used as a pre-commit hook. Assets are loaded by the url-loader depending on their size, fallback option uses file-loader.

## Building and running on localhost

First install dependencies:

```sh
yarn install
```

To run in hot module reloading mode:

```sh
yarn dev
```

To create a production build:

```sh
yarn build-prod
```

To create a development build:

```sh
yarn build-dev
```
