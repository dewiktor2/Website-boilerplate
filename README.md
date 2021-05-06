# Website-boilerplate



# Website-boilerplate

Website boilerplate with webpack 5 using Babel, PostCSS, Sass and hot dev server with production and dev configs.

## Installation

Clone this repo and npm install.

```bash
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```

## Features

- [webpack](https://webpack.js.org/) - Module and asset bundler
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [ESlint](https://github.com/eslint/eslint) -  Enforce styleguide across application
- [Prettier](https://github.com/prettier/prettier) - Code formatter
- [Husky](https://github.com/typicode/husky) - Git hooks ( prettier, eslint use before commit)
- [Linstaged](https://github.com/okonet/lint-staged) - Run linters against staged git files
