/*
 * The Icon component renders icons in different colors. This component
 * can be used in other components. For example, in the TeamMember component.
 */

import React from 'react';
import cx from 'classnames';
import * as s from './styles';
import { string, bool } from 'prop-types';


const Icon = ({ as = 'i', name, isInverted, ...props }) => {
  /* Adding an "API" classname, by which it is possible to redefine the component style properties */
  const className = cx(`icon fa fa-${name}`, props.className);

  /* Redefine an HTML tag for the icon according to the given properties. By default, <i> */
  const Element = s.Icon.withComponent(as);

  return (
    <Element {...props} isOutlined={!isInverted} isInverted={false} className={className} />
  );
};

Icon.defaultProps = {
  size: 'normal'
};

Icon.propTypes = {
  as: string,
  name: string,
  isInverted: bool,
  className: string
};

export default Icon;
