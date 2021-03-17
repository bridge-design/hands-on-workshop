/*
 * Button component. It provides interfaces for all types
 * of the buttons. Different types of the buttons are coded
 * as different components and imported here.
 */

import React from "react";
import styled, { css } from "styled-components";
import * as colors from '../../tokens/colors';
import { string } from "prop-types";

const StyledButton = styled.button`
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  
  
  /* height: 2.4em; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: 1px solid;
  border-color: transparent;
  box-sizing: border-box;
  line-height: 24px;
  position: relative;
  user-select: none;
  text-decoration: none;
  border-radius: ${(p) => (p.isRounded || p.isIcon ? "1rem" : null)};
  padding: ${(p) => (p.isIcon ? ".75rem" : "1rem")};
  background-color: ${(p) => (p.color ? p.color : colors.primaryOrange100)};
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  color: ${(p) => (p.textColor ? p.textColor : colors.secondaryWhite100)};
  font-size: ${(p) => (p.size ? p.size : "14px")};
  width: ${(p) => (p.isStretched ? "100%" : null)};
  ${(p) =>
    (p.isOutline || p.isIcon) &&
    `
   background-color: transparent;
   border-color: ${colors.secondaryBlack20};
   color: ${colors.secondaryBlack100};`}

  & .icon {
    margin: 0;
    font-size: ${(p) => (p.size ? p.size : "1rem")};
  }

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }
`;

const StyledButtonLink = styled(StyledButton).attrs({ as: "a" })`
  pointer-events: ${(props) => (props.disabled ? "none" : "default")};
`;

const Button = ({ href, children, ...props }) => {
  /* Check the button to a href attribute */
  let isButtonLink = href ? true : false;

  /*
   * Different buttons to be rendered, depending on the
   * given properties
   */
  if (isButtonLink) {
    return (
      <StyledButtonLink href={href} {...props}>
        {children}
      </StyledButtonLink>
    );
  } else {
    return <StyledButton {...props}>{children}</StyledButton>;
  }
};

Button.propTypes = {
  href: string,
};

export default Button;
