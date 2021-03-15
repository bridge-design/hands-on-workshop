import styled, { css } from 'styled-components';
import { isCircular } from 'styled-utils';

/*
 * In styled-components, you can define functions that output
 * CSS properties. This functions can be called from inside the
 * element declarations.
 */
const hasBorder = ({ hasBorder }) => {
  if (!hasBorder) return;
  return css`
    border: 1px solid transparent;
  `;
};

/* Default styles for Icon */
export const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 1.6em;
  height: 1.6em;
  line-height: 1.5;
  font-size: ${p => p.size ? p.size : '1rem'}; 
  color: ${p => p.color};
  ${isCircular}
  ${hasBorder}
`;
