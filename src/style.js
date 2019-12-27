import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lobster:400,700|Satisfy:400,700|Raleway:400,500');
  html > body > #root {
    height: min-content;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  body {
    overflow: ${props => props.toggled ? 'hidden': 'auto'};
  }
}
`

// html > body > #root {
//   height: 100%;
// }
