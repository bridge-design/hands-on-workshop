const path = require("path");
const pathToInlineSvg = path.resolve(__dirname, "../src/components/Icon/svg");
const webpack = require("webpack");
const WatchExternalFilesPlugin = require("webpack-watch-files-plugin").default;
const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");

// const StyleDictionary = require("style-dictionary").extend(
//   "./.tokens/config.js"
// );

// console.log(
//   "🚀 ~ file: main.js ~ line 8 ~ StyleDictionary",
//   StyleDictionary.format.customES6
// );
// StyleDictionary.buildPlatform("js");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.js"],
  addons: ["@storybook/addon-essentials", "storybook-addon-designs", "creevey"],
  webpackFinal: async (config) => {
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ];

    // SVGR
    const rules = config.module.rules;
    // modify storybook's file-loader rule to avoid conflicts with svgr
    const fileLoaderRule = rules.find((rule) => rule.test.test(".svg"));

    fileLoaderRule.exclude = pathToInlineSvg;

    rules.push({
      test: /\.svg$/,
      include: pathToInlineSvg,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
        "file-loader",
      ],
    });

    class WatchDesignTokensPlugin {
      apply(compiler) {
        compiler.hooks.beforeCompile.tap("CustomContextPlugin", (params) => {
          params.compilationDependencies.add(
            path.resolve(__dirname, "../.tokens", "design-tokens.json")
          );
        });
      }
    }
    config.plugins.push(new WatchDesignTokensPlugin());

    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.invalid.tap("RebuildTokens", (fn) => {
          const StyleDictionary = require("style-dictionary").extend(
            "./.tokens/config.js"
          );

          if (/design-tokens.json$/.test(fn)) {
            StyleDictionary.extend("./.tokens/config.js");
            StyleDictionary.buildPlatform("js");
          }
        });
      },
    });

    return config;
  },
};
