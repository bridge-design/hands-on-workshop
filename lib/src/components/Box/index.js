/*
 * The Box component provides a container, inside which you can put
 * other components. It is used in the stories (documentation) to separate one
 * component from another.
 */

import React from "react";
import { string } from "prop-types";
import styled, { css } from "styled-components";

const StyledBox = styled.div`
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  border-radius: 3px;
  box-shadow: ${`
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1)
  `};
  padding: ${(p) => p.padding};
  background: ${(p) => p.color};
  color: ${(p) => p.textColor};
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }
`;

const Box = (props) => {
  return <StyledBox {...props} hSpace="30px" />;
};

Box.defaultProps = {
  padding: "0.6em",
  color: "white",
};

Box.propTypes = {
  className: string,
  vSpace: string,
  hSpace: string,
  padding: string,
};

export default Box;
