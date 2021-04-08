# Hands on with design systems workshop

This is a starter repositiry for the particpants of the workshop. Refer to [Handout page](https://hands-on-workshop.varya.me/handout/) for detailed info on how to work with this repo.

## Project structure

The project is split into 3 independent [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/). Read below what you can do with each of them.

### Tokens

A workspace for processing Figma tokens. It uses [style-dictionary](https://github.com/amzn/style-dictionary) to transform exported JSON into JS object of a convenient shape.

#### Folder structure

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

Place `design-tokens.json`(a file exported from Figma) in the root of `tokens` folder. After running build, processed files will be added to `tokens/dist`.

Inside a `config.js` you already got a tailored style-dictionary config, which works well with current setup. If you want to change the shape of your tokens, please refer to [style-dictionary documentation](https://amzn.github.io/style-dictionary/#/README).

#### Scripts

- `yarn tokens:build` - builds token files. Run it every time when you reexport files from Figma.
- `yarn tokens:version` - bumps tokens version and creates a commit with the contents of `dist/` folder.

### Design system

A workspace for developing your components library.

#### Folder structure

```
design-system/
┣ .add-component/
┣ .loki/
┣ .storybook/
┣ dist/
┣ node_modules/
┣ src/
┃ ┣ components/
┃ ┃ ┣ Button/
┃ ┃ ┗ Icon/
┃ ┣ color.stories.mdx
┃ ┣ global.js
┃ ┣ index.js
┃ ┣ intro.stories.mdx
┃ ┗ typography.stories.mdx
┣ package.json
┗ webpack.config.js
```

#### Scripts

- `yarn design-system` - starts storybook development server at https://localhost:6006. Alias: `yarn start`.
- `yarn add-component <ComponentName>` - adds template files for new component
- `yarn design-system:build` - builds components library into `dist/` folder.
- `yarn design-system:version` - bumps library version and creates a commit with contents of `dist/` folder.
  
- `yarn test:creevey` - run tests with [creevey](https://github.com/wKich/creevey)
- `yarn test:creevey:runner` - run creevey with UI
- `yarn test:creevey:update` - update all screenshots for creevey
- `yarn test:loki` - run tests with [loki](https://loki.js.org/)
- `yarn test:loki:update` - update all screenshots for loki
- `yarn test:loki:approve` - approve all failing screenshots for loki


### Product

A workspace where you build your application using the components library.

#### Folder structure

```
product/
┣ build/
┣ node_modules/
┣ public/
┃ ┗ index.html
┣ src/
┃ ┣ assets/
┃ ┣ pages/
┃ ┃ ┣ cart.js
┃ ┃ ┣ checkout.js
┃ ┃ ┣ details.js
┃ ┃ ┗ home.js
┃ ┗ index.js
┗ package.json
```

#### Scripts

- `yarn product` - starts development server at https://localhost:3000
- `yarn product:build` - creates minified production build
- `yarn product:version` - bumps product version
- `yarn deploy` - deploy product manually. Normally you don't need it, Github Action s will deploy automatically every time you release a new version.