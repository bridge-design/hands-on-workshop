/*
 * The stories (documentaion) can also be used without React component and
 * without styled-component. In here, you can see that a color set is
 * defined as an JavaScript Object. There is no React component for that and
 * no styles. But this story demonstrates how to import the set of colors
 * and use its values.
 */

import React from "react";
import { storiesOf } from "@storybook/react";
import Color from "color";

/* The components to use in the stories */
import Box from "../Box";

import set from "./colorset";

storiesOf("Colors Old", module) // eslint-disable-line no-undef
  .add("index", () => {
    const colorItems = Object.keys(set).map((key) => {
      const textColor = Color(set[key]).isLight() ? "#000" : "#FFF";

      return (
        <Box color={set[key]} textColor={textColor} key={key}>
          {key}
          <pre>
            <code>
              {`/*Usage in styled-components*/
import colors from '../Colors/colorset'
export const MyComponent = styled.div`}
              `
              {`
  color: \${colors.${key}};
`}
              `
            </code>
          </pre>
        </Box>
      );
    });
    return <div>{colorItems}</div>;
  });
