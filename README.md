# Hands on with design systems workshop

This is a starter repositiry for the partcicpants of the workshop.

## Getting started
Install dependencies with yarn: `yarn install`
## Project structure

The project is split into 3 independent [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/). Read below what you can do with each of them.

### Tokens

A workspace for processing Figma tokens. It uses [style-dictionary](https://github.com/amzn/style-dictionary) to transform exported JSON into JS object of a convenient shape.

```
tokens/
┣ dist/
┃ ┣ colors.js
┃ ┣ index.js
┃ ┗ typography.js
┣ config.js
┣ design-tokens.json
┗ package.json
```

Place `design-tokens.json`(a file exported from Figma) in the root of `tokens` folder. If you run `yarn build:tokens` now, your files will be added to `tokens/dist`.

*Important.* You are not supposed to remove `dist/` folder; it contains `index.js` file which will be needed for reexporting variables.

Inside a `config.js` you already got a tailor-made style-dictionary config, which works nicely with current setup. If you want to change the shape of your tokens, please refer to [style-dictionary documentation](https://amzn.github.io/style-dictionary/#/README).

__Scripts:__ 

- `yarn build:tokens` - builds token files. Run it every time when you reexport files from Figma.

### Design system

A workspace for developing your components library.

Folder structure: 
```
design-system/
┣ .add-component/ 
┣ .storybook/
┣ assets/
┃ ┣ icons/
┃ ┗ images/
┣ dist/
┣ report/
┃ ┣ index.html
┃ ┗ main.js
┣ src/
┃ ┣ components/
┣ .babelrc
┣ package.json
┗ webpack.config.js
```

You can easily add new component running `yarn add-component NewComponent`. This will create a folder with template files inside `src/components/`. You will need to reexport this component in `src/index.js` file to include into bundle.
The tests are available in `report/` folder

__Scripts:__ 

- `yarn start` - starts storybook development server at localhost:6006
- `yarn add-component <ComponentName>` - adds template files for new component
- `yarn build:design-system` - builds components library and storybook.
- `yarn test`

TODO: build lib and stb together

### Product

In this workspace for building a demo app using the components library you created.

```
product/
┣ build/
┃ ┗ index.html
┣ src/
┃ ┗ index.js
┃ ┣ home.js
┃ ┣ details.js
┣ .babelrc
┣ package.json
┗ webpack.product.config.js
```

Add new pages into `src/` folder. 

__Scripts:__ 
- `yarn product` - starts development server at localhost:8080
- `yarn build:product` or just `yaarn build` - starts development server at localhost:8080