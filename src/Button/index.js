/*
 * Button component. It provides interfaces for all types
 * of the buttons. Different types of the buttons are coded
 * as different components and imported here.
 */

import React from 'react';
import cx from 'classnames';
import * as s from './styles';
import { string } from 'prop-types';

const Button = ({ href, children, ...props }) => {
   /* Check the button to a href attribute */
  let isButtonLink = href ? true : false;

  /* Adding an "API" classname, by which it is possible to redefine the component style properties */
  let className = cx(
    isButtonLink ? 'button button--link' : 'button', 
    props.className
  );

  /*
   * Different buttons to be rendered, depending on the
   * given properties
   */
  if (isButtonLink) {
    return <s.ButtonLink href={href} {...props} className={className}>{children}</s.ButtonLink>;
  } else {
    return <s.Button {...props} className={className}>{children}</s.Button>;
  }
};

Button.propTypes = {
  href: string
};

export default Button;
