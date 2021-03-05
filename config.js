import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure } from '@storybook/react'
// import { setConsoleOptions } from '@storybook/addon-console'
// import { setDefaults } from '@storybook/addon-info'

const req = require.context('../src', true, /\.stories\.js$/)
 
// setConsoleOptions({
//   panelExclude: [],
// })

// setDefaults({
//   header: false,
//   inline: true
// })

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
