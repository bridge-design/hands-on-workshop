/*
 * Section component provides a container with paddings.
 */
import React from "react";
import { node, arrayOf, oneOfType } from "prop-types";
/*
 * For its styles, Section component uses plain CSS.
 * Change it to styled-components, if you want.
 */
import "./styles.css";

/*
 * Note! When using plain CSS, the class names have to be provided manually.
 */
const Section = ({ children }) => {
  return (
    <div className="section">
      <div className="section__inner">{children}</div>
    </div>
  );
};

Section.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

export default Section;

/*
 * For re-use of Typography styles, Section component has a couple of subcomponents to be
 * used as wrappers for texts and headers. Check out the story (documentation) to see how
 * these wrappers are used.
 */
const SectionHeader = ({ children }) => {
  return <h1>{children}</h1>;
};

SectionHeader.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

export { SectionHeader };

const SectionText = ({ children }) => {
  return <p>{children}</p>;
};

SectionText.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

export { SectionText };
