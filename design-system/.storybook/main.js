const path = require("path");
const pathToInlineSvg = path.resolve(__dirname, "../src/components/Icon/svg");

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
    return config;
  },
};
