# Volto iFrame Block (volto-iframe-block)

[![npm](https://img.shields.io/npm/v/@kitconcept/volto-iframe-block)](https://www.npmjs.com/package/@kitconcept/volto-iframe-block)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://kitconcept.github.io/volto-iframe-block/)
[![Code analysis checks](https://github.com/kitconcept/volto-iframe-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-iframe-block/actions/workflows/code.yml)
[![Unit tests](https://github.com/kitconcept/volto-iframe-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-iframe-block/actions/workflows/unit.yml)

<img alt="kitconcept GmbH" width="200px" src="https://kitconcept.com/logo.svg">

## Features

<!-- List your awesome features here -->
The Volto Iframe Block allows editors to embed another website into their Volto page.

## Installation

To install your project, you must choose the method appropriate to your version of Volto.


### Volto 17 and earlier

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon volto-iframe-block
cd my-volto-project
```

Add `@kitconcept/volto-iframe-block` to your package.json:

```JSON
"addons": [
    "@kitconcept/volto-iframe-block"
],

"dependencies": {
    "@kitconcept/volto-iframe-block": "*"
}
```

Download and install the new add-on by running:

```shell
yarn install
```

Start volto with:

```shell
yarn start
```

### Volto 18 and later

Add `@kitconcept/volto-iframe-block` to your `package.json`:

```json
"dependencies": {
    "@kitconcept/volto-iframe-block": "*"
}
```

Add `@kitconcept/volto-iframe-block` to your `volto.config.js`:

```javascript
const addons = ['@kitconcept/volto-iframe-block'];
```

Download and install the new add-on by running:

```shell
pnpm install
```

Start volto with:

```shell
pnpm start
```

## Test installation

Visit http://localhost:3000/ in a browser, login, and check the awesome new features.

## Block configuration

`validUrls` allows you to restrict the use of the iFrame block by restricting the URLs that editors are allowed to embed in the `iframe`. If an unvalid URL is entered, an error is thrown.

```js
config.blocks.blocksConfig.iframe.validUrls = [''];
```

## License

The project is licensed under the MIT license.
