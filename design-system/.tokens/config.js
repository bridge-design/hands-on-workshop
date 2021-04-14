const StyleDictionary = require("style-dictionary");

const CATEGORY_NAME = {
  fill: "colors",
  font: "typography",
};

const DEFAULT_CATEGORY_NAME = "misc";

const FILE_PREFIX = `/*
 * This file is generated automatically, if you edit it, your changs will be overwritten.
 * To edit your tokens, change them in Figma an re-export with plugin to design-tokens.json
 */\n\n`;

// Quick check for typography category by the name of the token
const isTypographyToken = (tokenObj) => {
  const typographyKeywords = [
    "fontSize",
    "textDecoration",
    "fontFamily",
    "fontWeight",
    "fontStyle",
    "fontStretch",
    "fontStyleOld",
    "letterSpacing",
    "lineHeight",
    "paragraphIndent",
    "paragraphSpacing",
    "textCase",
  ];
  return tokenObj.path.some((x) => typographyKeywords.includes(x));
};

module.exports = {
  format: {
    // Below we implemented a custom logic to split tokens into categories and combine in one file.
    // The logic depends on the Figma plugin output, and oarticularly "category" value.
    // In case any breaking changes introduced in the plugin, this logic might meed to be revisited.
    customES6: function (dictionary, config) {
      const tokensByCategory = {};
      dictionary.allProperties.forEach((token) => {
        let prettyCategoryName;
        // if category name is defined in token data, get it from there
        if ("category" in token) {
          prettyCategoryName = CATEGORY_NAME[token.category] || token.category;
          // otherwise check based on contents
        } else {
          // check if tokens belongs to typography
          // this check is needed because of shape of data the plugin creates and the way style-dict merges data - category key doesn't always make it to transformed token value
          prettyCategoryName = isTypographyToken(token)
            ? "typography"
            : DEFAULT_CATEGORY_NAME; //fallback in case the category wasn't detected
        }

        if (!tokensByCategory[prettyCategoryName]) {
          tokensByCategory[prettyCategoryName] = {};
        }

        tokensByCategory[prettyCategoryName][token.name] = token.value;
      });
      // Once all the values are collected to new object we need to transform them to strings
      return (
        FILE_PREFIX +
        Object.keys(tokensByCategory)
          .map(
            (category) =>
              `export const ${category} = ${JSON.stringify(
                tokensByCategory[category],
                null,
                2
              )}\n`
          )
          .join("\n")
      );
    },
  },
  source: ["./.tokens/design-tokens.json"],
  platforms: {
    js: {
      transforms: ["size/px", "name/cti/camel"],
      buildPath: "./src/",
      files: [
        {
          destination: "tokens.js",
          format: "customES6",
        },
      ],
    },
  },
};
