import React from "react";

import Typography from "./";

/*
 * The story (documentation) for the Typography component
 * only outputs the React component. In turn, this component knows
 * what is needed to be rendered.
 */

export default {
  title: "Typography Old",
  component: Typography,
};

/* Named export is an actual component story. */
export const Default = () => <Typography />;

/* Additional story parameters */
Default.story = {
  parameters: {
    info: `Typography component is needed to provide global CSS such as
  font and styles to use across all the other components.`,
  },
};
