# Hands on with design systems workshop

This is a starter repositiry for the partcicpants of the workshop.

## Getting started
Install dependencies with yarn: `yarn install`
## Project structure

The project is split into 3 independent [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/). Read below what you can do with each of them.

### Tokens

A workspace for processing Figma tokens. It uses [style-dictionary](https://github.com/amzn/style-dictionary) to transform exported JSON into JS object with mre convenient shape.

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

There is a predefined config for style-dictionary in `config.js`, which works nicely with current setup. If you want to change the shape of your tokens, please refer to [style-dictionary dovumentation](https://amzn.github.io/style-dictionary/#/README).

__Scripts:__ 

- `yarn build:tokens` - builds token files. Run it every time when you reexport files from Figma.

### Lib

A workspace for developing your components library.

Folder structure: 
```
lib/
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
- `yarn build:lib` - builds components library.
- `yarn build:storybook` - builds storybook.
- `yarn deploy:storybook` - deploy storybook to github pages.
- `yarn test`

### Demo

In this workspace for building a demo app using the components library you created.

```
demo/
┣ build/
┃ ┗ index.html
┣ src/
┃ ┗ index.js
┃ ┣ home.js
┃ ┣ details.js
┣ .babelrc
┣ package.json
┗ webpack.demo.config.js
```

Add new pages into `src/` folder. 

__Scripts:__ 
- `yarn demo` - starts development server at localhost:8080
- `yarn build:demo` or just `yaarn build` - starts development server at localhost:8080