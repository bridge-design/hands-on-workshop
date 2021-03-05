/*
 * Typography component is needed to provide global CSS such as
 * font and styles to use across all the other components.
 * As other components, it consists of a React commponent, styled
 * component and a story (documentation). But unlike others this
 * React component is not supposed to be re-used. The code below
 * is only needed to render the texts with specific styles. Other
 * components that need typography styles can directly use
 * the Typography styled component. You can see an example of that
 * in TeamMember component.
 */


import React from 'react';

import * as ts from './styles.js';

const Typography = () => {

  return (
    <div>
      <ts.FuturaBold>In Futura Bold: The quick brown fox jumps over the lazy dog.</ts.FuturaBold>
      <ts.Lato>In Lato: The quick brown fox jumps over the lazy dog.</ts.Lato>
      <div>
        <ts.Header1>I am Header1</ts.Header1>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.Header1>I am Header1</ts.Header1>
`}</code></pre>
      </div>
      <div>
        <ts.Header2>I am Header2</ts.Header2>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.Header2>I am Header2</ts.Header2>
`}</code></pre>
      </div>
      <div>
        <ts.Header3>I am Header3</ts.Header3>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.Header3>I am Header3</ts.Header3>
`}</code></pre>
      </div>
      <div>
        <ts.P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ts.P>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ts.P>
`}</code></pre>
      </div>
    </div>
  );
};

export default Typography;
