/* Helpful imports */
import React from "react";
/* The component to document */
import Box from "./";

/* The default export metadata controls how Storybook lists your stories and provides information used by addons. */

export default {
  title: "Box",
  component: Box,
  parameters: {
    docs: {
      description: {
        /* Optional description of component can be added here */
        component: `The Box component provides a container, inside which you can put
 other components. It is used in the stories (documentation) to separate one
 component from another.`,
      },
    },
  },
};

/* Named export is an actual component story. */
export const Default = () => (
  <div>
    <Box>Some text in box</Box>
    <Box color="#1b8ceb" textColor="#ffffff" tone={2}>
      Some text in box
    </Box>
    <Box color="#00d1b2" textColor="#ffffff" padding="0.4rem">
      Some text in box
    </Box>
  </div>
);
