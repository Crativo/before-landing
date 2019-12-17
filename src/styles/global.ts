import { createGlobalStyle } from 'styled-components'
import fontFaces from './fontFaces'
import theme from './theme'

export default createGlobalStyle`
  ${fontFaces}

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscaled;
    text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    font-size: 62.5%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif ;
    font-weight: ${theme.fontWeight.regular};
    color: ${theme.colors.black};
    margin: 0;

    @media print {
      transform: scale(0.8);
      transform-origin: 0 0;
      width: 125%;
    }
  }

  #___gatsby {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .reveal,
  .reveal--delay1,
  .reveal--delay2 {
    visibility: hidden;
  }
`
