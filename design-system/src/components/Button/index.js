/*
 * Button component. It provides interfaces for all types
 * of the buttons.
 */

import React from "react";
import styled, { css } from "styled-components";
import { colors } from "tokens";
import { bool, string } from "prop-types";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: 1px solid;
  border-color: ${(p) =>
    p.isOutline ? colors.secondaryBlack20 : "transparent"};
  box-sizing: border-box;
  line-height: 24px;
  position: relative;
  user-select: none;
  text-decoration: none;
  border-radius: 1rem;
  padding: ${(p) => (p.label ? "16px" : "12px")};
  background-color: ${(p) => (p.isOutline ? "transparent" : p.color)};
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  color: ${(p) =>
    p.isOutline ? colors.secondaryBlack100 : colors.secondaryWhite100};
  font-size: 14px;
  font-weight: 700;
  width: ${(p) => (p.isStretched ? "100%" : null)};
`;

const Button = ({ label, children, ...props }) => {
  console.log("🚀 ~ file: index.js ~ line 37 ~ Button ~ props", props);
  return <StyledButton {...props}>{label ? label : children}</StyledButton>;
};

Button.propTypes = {
  label: string,
  disabled: bool,
  isStretched: bool,
  isOutline: bool,
  color: string,
};

Button.defaultProps = {
  color: colors.primaryOrange100,
};

export default Button;
