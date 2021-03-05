/*
 * The Box component provides a container, inside which you can put
 * other components. It is used in the stories (documentation) to separate one
 * component from another.
 */

import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import * as s from './styles';

const Box = (props) => {

  /* Adding an "API" classname, by which it is possible to redefine the component style properties */
  const className = cx(`box`, props.className);
  return (
    <s.Box {...props} className={className} />
  );
};

Box.defaultProps = {
  padding: '0.6em',
  color: 'white'
};

Box.propTypes = {
  className: string,
  vSpace: string,
  hSpace: string,
  padding: string
};

export default Box;
