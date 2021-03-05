import styled, { createGlobalStyle } from "styled-components";

/*
 * The feature of styled components is that they encapsulate the
 * styles by providing unique classnames. This ensures that the styles of
 * one component does not mix with the styles of other components.
 * However, sometimes you need to provide global CSS to be used across
 * the whole application. This is possible with injectGlobal method.
 * Defining fonts for typography is a good demonstration of such a need.
 *
 * Documentation: https://www.styled-components.com/docs/api#injectglobal
 */

createGlobalStyle`
/* oswald-regular - latin */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/oswald-v36-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/oswald-v36-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/oswald-v36-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/oswald-v36-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/oswald-v36-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/oswald-v36-latin-regular.svg#Oswald') format('svg'); /* Legacy iOS */
}

  /* lato-300 - latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/lato-v17-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lato-v17-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lato-v17-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lato-v17-latin-300.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lato-v17-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lato-v17-latin-300.svg#Lato') format('svg'); /* Legacy iOS */
}
/* lato-regular - latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/lato-v17-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lato-v17-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lato-v17-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lato-v17-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lato-v17-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lato-v17-latin-regular.svg#Lato') format('svg'); /* Legacy iOS */
}
/* lato-italic - latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  src: url('../fonts/lato-v17-latin-italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lato-v17-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lato-v17-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lato-v17-latin-italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lato-v17-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lato-v17-latin-italic.svg#Lato') format('svg'); /* Legacy iOS */
}
`;

/*
 * The styles below use the color from th set.
 */
import colors from "../Colors/colorset";

/*
 * Typography component provides styles for basic typography elements
 * such as headers and paragraphs.
 */

export const Header1 = styled.h1`
  font-family: futura-pt-bold;
`;

export const Header2 = styled.h2`
  font-family: futura-pt-bold, sans-serif;
  font-size: 22px;
  color: ${colors.dark};
  line-height: 1.4em;
  margin: 0;
`;

export const Header3 = styled.h3`
  font-family: lato, sans-serif;
  font-size: 16px;
  color: ${colors.grey};
  font-weight: 700;
  margin: 0;
`;

export const P = styled.p`
  font-family: lato;
  color: ${colors.dark};
`;

/*
 * In ordder to show in the story (documentation) what are the available
 * fonts, this component provides styles for each font. They are not
 * meant to be used in the other components, only in dpcumentation.
 */

export const FuturaBold = styled.p`
  font-family: "Oswald";
`;

export const Lato = styled.p`
  font-family: "Lato";
`;
