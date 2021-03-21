import { createGlobalStyle, css } from "styled-components";
import * as typography from "./tokens/typography";

export const bodyStyles = css`
  font-family: ${fontFamilies.regular};
  color: ${colors.black};
  margin: 2em;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  * {
    box-sizing: border-box;
  }
  h1 {
    font-weight: ${fontWeights.regular};
    margin: 0;
    padding: 0;
  }
  button,
  input,
  textarea,
  select {
    font-family: ${fontFamilies.regular};
  }
  sub,
  sup {
    font-size: ${fontSizes.sub};
  }
  sub {
    bottom: -0.2em;
  }
  sup {
    top: -0.2em;
  }
  b,
  em {
    font-weight: ${fontWeights.bold};
  }
  hr {
    border: none;
    border-top: 1px solid ${colors.gray};
    clear: both;
    margin-bottom: 1.25rem;
  }
`;

// Allow design system consumers to access font settings but control how and
// where they load the font.
export const fontUrl =
  "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap";

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
  // prevent mouse-clicks from focusing elements
  // this removes the ugly blue outline
  :focus:not(:focus-visible) {
    outline: none;
  }
`;
