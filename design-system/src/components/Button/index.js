/*
 * Button component. It provides interfaces for all types
 * of the buttons.
 */

import React from "react";
import styled, { css } from "styled-components";
import { colors } from "tokens";
import { string } from "prop-types";

const StyledButton = styled.button`
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
  border-radius: 1rem;
  padding: ${(p) => (p.isIcon ? ".75rem" : "1rem")};
  background-color: ${(p) => (p.color ? p.color : colors.primaryOrange100)};
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  color: ${(p) => (p.textColor ? p.textColor : colors.secondaryWhite100)};
  font-size: ${(p) => (p.size ? p.size : "14px")};
  font-weight: 700;
  width: ${(p) => (p.isStretched ? "100%" : null)};
  ${(p) =>
    p.isOutline || p.isIcon
      ? `
   background-color: ${p.color ? p.color : "transparent"};
   border-color: ${colors.secondaryBlack20};
   color: ${colors.secondaryBlack100};`
      : ""}

  & .icon {
    margin: 0;
    font-size: ${(p) => (p.size ? p.size : "1rem")};
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
