import { createGlobalStyle, css } from "styled-components";
import { typography as t } from "./tokens";
const bodyStyles = css`
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  font-family: ${t.paragraph3FontFamily};
  font-size: ${t.paragraph3FontSize};
  font-weight: ${t.paragraph3FontWeight};
  font-style: ${t.paragraph3FontStyle};
  line-height: ${t.paragraph3LineHeight};

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  p {
    font-family: ${t.paragraph3FontFamily};
    font-size: ${t.paragraph3FontSize};
    line-height: ${t.paragraph3LineHeight};
    font-weight: ${t.paragraph3FontWeight};
    font-style: ${t.paragraph3FontStyle};
    letter-spacing: ${t.paragraph3LetterSpacing};
  }

  h1 {
    font-family: ${t.headline1FontFamily};
    font-size: ${t.headline1FontSize};
    line-height: ${t.headline1LineHeight};
    font-weight: ${t.headline1FontWeight};
    font-style: ${t.headline1FontStyle};
    letter-spacing: ${t.headline1LetterSpacing};
  }
  h2 {
    font-family: ${t.headline2FontFamily};
    font-size: ${t.headline2FontSize};
    font-weight: ${t.headline2FontWeight};
    font-style: ${t.headline2FontStyle};
    line-height: ${t.headline2LineHeight};
    letter-spacing: ${t.headline2LetterSpacing};
  }
  h3 {
    font-family: ${t.headline3FontFamily};
    font-size: ${t.headline3FontSize};
    font-weight: ${t.headline3FontWeight};
    font-style: ${t.headline3FontStyle};
    line-height: ${t.headline3LineHeight};
    letter-spacing: ${t.headline3LetterSpacing};
  }
  h4 {
    font-family: ${t.headline4FontFamily};
    font-size: ${t.headline4FontSize};
    font-weight: ${t.headline4FontWeight};
    font-style: ${t.headline4FontStyle};
    line-height: ${t.headline4LineHeight};
    letter-spacing: ${t.headline4LetterSpacing};
  }
  h5 {
    font-family: ${t.headline5FontFamily};
    font-size: ${t.headline5FontSize};
    font-weight: ${t.headline5FontWeight};
    font-style: ${t.headline5FontStyle};
    line-height: ${t.headline5LineHeight};
    letter-spacing: ${t.headline5LetterSpacing};
  }
  h6 {
    font-family: ${t.headline6FontFamily};
    font-size: ${t.headline6FontSize};
    font-weight: ${t.headline6FontWeight};
    font-style: ${t.headline6FontStyle};
    line-height: ${t.headline6LineHeight};
    letter-spacing: ${t.headline6LetterSpacing};
  }
`;

// Allow design system consumers to access font settings but control how and
// where they load the fon${t.
export const fontUrl =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap";

const globalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
  // prevent mouse-clicks from focusing elements
  :focus:not(:focus-visible) {
    outline: none;
  }
`;

export default globalStyle;
