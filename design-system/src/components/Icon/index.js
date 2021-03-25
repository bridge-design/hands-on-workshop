import React from "react";
import styled from "styled-components";

import SettingsIcon from "./svg/setting.svg";
import HeartIcon from "./svg/heart.svg";
import ArrowBackIcon from "./svg/arrowBack.svg";
/* Icon
 *
 * SVG icons wrapper
 */

const icons = {
  settings: SettingsIcon,
  heart: HeartIcon,
  arrowBack: ArrowBackIcon,
};
const Icon = ({ name, width = 24, height = 24, color = "#000", ...props }) => {
  const SvgIcon = icons[name];
  return (
    <span className="icon" {...props} css={{ display: "inline-flex" }}>
      <SvgIcon fill={color} width={width} height={height} />
    </span>
  );
};

export default Icon;
