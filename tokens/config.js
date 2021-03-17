const StyleDictionary = require("style-dictionary");

/* Basic filter to separate typography tokens. It might need tweaking depending on the token data shape */
StyleDictionary.registerFilter({
  name: "isTypography",
  matcher: function (prop) {
    return (
      prop.name.startsWith("headline") || prop.name.startsWith("paragraph")
    );
  },
});

module.exports = {
  source: ["src/tokens/design-tokens.json"],
  platforms: {
    js: {
      transformGroup: "js",
      buildPath: "src/tokens/",
      transforms: ["size/px", "name/cti/camel"],
      /* We split tokens into separate files - it will be easier to use them this way */
      files: [
        /* Filter and extract typography tokens */
        {
          destination: "typography.js",
          format: "javascript/es6",
          filter: "isTypography",
        },
        /* Filter and extract color tokens*/
        {
          destination: "colors.js",
          format: "javascript/es6",
          filter: {
            type: "color",
          },
        },
      ],
    },
  },
};
