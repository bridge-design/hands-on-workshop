module.exports = (name) => `
import { Meta, Canvas, Story } from '@storybook/addon-docs/blocks';

import ${name} from ".";

<Meta title="Components/${name}" />

## ${name}

TODO: add component description

<Preview>
  <Story name="Default">
    <${name}/>
  </Story>
</Preview>
`;
