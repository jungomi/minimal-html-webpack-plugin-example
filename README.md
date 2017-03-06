# Minimal html-webpack-plugin example

A minimal example using [html-webpack-plugin][plugin].

## Install dependencies

```sh
yarn

npm install # Or with npm if you don't use yarn
```

## Build

Build with:

```sh
yarn build

npm run build # Or with npm
```

The generated HTML is in **dist/index.html**, which includes the app bundle with
the correct hash.

Change anything in **src/index.js** and the hash will change, then build it
again and the HTML now includes the new bundle.

## Dev Server

Run the dev server with:

```sh
yarn dev

npm run dev # Or with npm
```

App is served on [http://localhost:8080][dev].

[dev]: http://localhost:8080
[plugin]: https://github.com/jantimon/html-webpack-plugin
