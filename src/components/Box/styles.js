import styled, { css } from 'styled-components';
import { withSize } from 'styled-utils';

const addSpace = ({ hSpace, vSpace }) => {
  if (!hSpace && !vSpace) return;

  return css`
    > *:not(:last-child) {
      ${hSpace && `margin-right: ${hSpace} !important;`}
      ${vSpace && `margin-bottom: ${vSpace} !important;`}
    }
  `;
};

/*
 * A styled component. By default, rendered with div
 */
export const Box = styled.div`
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  border-radius: 3px;
  box-shadow: ${`
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1)
  `};
  padding: ${p => p.padding};
  background: ${p => p.color};
  color: ${p => p.textColor };
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  ${addSpace}
  ${withSize}
`;
