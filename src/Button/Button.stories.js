/* Helpful imports */
import React from "react";

/* The components to use in the stories */
import Box from "Box";
import Icon from "Icon";

/* The component to document */
import Button from "./";

export default {
  title: "Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        /* Optional description of component can be added here */
        component: `Button component provides interfaces for all types
 of the buttons. Different types of the buttons are coded
 as different components and imported here.`,
      },
    },
  },
};

export const Default = () => (
  <div>
    <Box>
      <Button
        onClick={function () {
          alert("You clicked!");
        }}
      >
        I am just a button
      </Button>
    </Box>
    <Box>
      <Button color="#1b8ceb" textColor="#fff" href="http://sc5.io">
        I am a link button
      </Button>
      <Button color="#1b8ceb" textColor="#fff" disabled href="http://sc5.io">
        Disabled button with link
      </Button>
    </Box>
    <Box>
      <Button color="#00d1b2" textColor="#fff" size="1rem">
        <Icon name="stack-overflow" />
        Button with Icon
      </Button>
    </Box>
    <Box>
      <Button color="#000" textColor="#fff">
        Like
      </Button>
      <Button color="#00d1b2" textColor="#fff">
        Like
      </Button>
    </Box>
  </div>
);

export const Colors = () => (
  <div>
    <Box>
      <Button>Normal</Button>
      <Button color="#1b8ceb" textColor="#fff">
        Primary
      </Button>
      <Button color="#00d1b2" textColor="#fff">
        Success
      </Button>
      <Button color="#e91e63" textColor="#fff">
        Danger
      </Button>
      <Button color="#888888" textColor="#fff">
        Gray
      </Button>
      <Button color="#888888" textColor="#fff" tone={2}>
        Light
      </Button>
      <Button color="#000" textColor="#fff">
        Black
      </Button>
    </Box>
    <Box color="#00d1b2">
      <Button as="div" isInverted>
        Normal
      </Button>
      <Button color="#1b8ceb" textColor="#fff" isInverted>
        Primary
      </Button>
      <Button color="#00d1b2" textColor="#fff" isInverted>
        Success
      </Button>
      <Button color="#e91e63" textColor="#fff" isInverted>
        Danger
      </Button>
      <Button color="#888888" textColor="#fff" isInverted>
        Gray
      </Button>
      <Button color="#888888" textColor="#fff" tone={2} isInverted>
        Light
      </Button>
      <Button color="#000" textColor="#fff" isInverted>
        Black
      </Button>
    </Box>
    <Box>
      <Button color="#1b8ceb" textColor="#fff" isOutlined>
        Primary
      </Button>
      <Button color="#00d1b2" textColor="#fff" isOutlined>
        Success
      </Button>
      <Button color="#e91e63" textColor="#fff" isOutlined>
        Danger
      </Button>
      <Button color="#888888" textColor="#fff" isOutlined>
        Grayscale
      </Button>
      <Button color="#000" textColor="#fff" isOutlined>
        Black
      </Button>
    </Box>
  </div>
);
export const WithDifferentSize = () => (
  <Box>
    <Button color="#1b8ceb" textColor="#fff" size="0.60rem">
      Tiny
    </Button>
    <Button color="#00d1b2" textColor="#fff" size="0.785rem">
      Small
    </Button>
    <Button color="#e91e63" textColor="#fff" size="1rem">
      Normal
    </Button>
    <Button color="#888888" textColor="#fff" size="1.5rem">
      Large
    </Button>
    <Button color="#000" textColor="#fff" size="2.0rem">
      XLarge
    </Button>
  </Box>
);
export const WithIcon = () => (
  <Box>
    <Button color="#1b8ceb" textColor="#fff" size="1rem">
      <Icon name="star" />
      Some text
    </Button>
    <Button color="#00d1b2" textColor="#fff" size="0.785rem" isOutlined>
      <Icon name="star" />
      Some text
    </Button>
    <Button color="#888888" textColor="#fff" tone={2} size="1rem" isIcon>
      <Icon name="stack-overflow" />
    </Button>
  </Box>
);
