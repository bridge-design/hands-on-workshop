/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from "react";
import ReactDOM from "react-dom";

// TODO: load components from built library
import { Section, SectionHeader, SectionText, Button } from "../src";

const Details = () => {
  return (
    <div>
      <div>
        <Section>
          <SectionHeader>Hello!</SectionHeader>
          <SectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </SectionText>
          <Button isStretched>Button!</Button>
        </Section>
      </div>
    </div>
  );
};

export default Details;
