/* Helpful imports */
import React from "react";

/* The components to use in the stories */
import Box from "../Box";

/* The component to document */
import Icon from "./";

export default {
  title: "Icon",
  component: Icon,
  parameters: {
    docs: {
      description: {
        /* Optional description of component can be added here */
        component: `The Icon component renders icons in different colors. This component
 can be used in other components.`,
      },
    },
  },
};

export const Default = () => (
  <div>
    <Box>
      <Icon name="star" color="#000" />
      <Icon name="star" color="#888888" />
      <Icon name="github" color="#1b8ceb" hasBorder />
      <Icon name="gift" color="#00d1b2" />
      <Icon name="bug" color="#e91e63" />
    </Box>
    <Box>
      <Icon name="star" color="#000" isInverted />
      <Icon name="star" color="#888888" isInverted />
      <Icon name="github" color="#1b8ceb" isInverted />
      <Icon name="gift" color="#00d1b2" isInverted />
      <Icon name="bug" color="#e91e63" isInverted />
    </Box>
    <Box>
      <Icon name="star" color="#000" isCircular hasBorder />
      <Icon name="github" color="#1b8ceb" isCircular isInverted />
      <Icon name="bug" color="#00d1b2" isCircular isInverted />
    </Box>
  </div>
);
export const WithDifferentSize = () => (
  <Box>
    <Icon name="star" color="#000" isInverted size="0.785rem" />
    <Icon name="star" color="#888888" isInverted />
    <Icon name="github" color="#1b8ceb" isInverted size="1.5rem" />
    <Icon name="gift" color="#00d1b2" isInverted size="2.0rem" />
    <Icon name="bug" color="#e91e63" isInverted size="3rem" />
  </Box>
);
export const SocialIcons = () => (
  <Box>
    <Icon name="twitter" color="#000" isInverted />
    <Icon name="linkedin" color="#888888" isInverted />
    <Icon name="github" color="#1b8ceb" isInverted />
  </Box>
);
