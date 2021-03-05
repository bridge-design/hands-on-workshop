const path = require('path')

module.exports = {
  techsToGen: [
    'react',
    'storybook',
    'styled-components'
  ],
  techs: {
    'react': {
      template: path.resolve(__dirname, './react-template.js'),
    },
    'storybook': {
      template: path.resolve(__dirname, './storybook-template.js'),
    }
  },
  index: false,
  directory: './src',
}

