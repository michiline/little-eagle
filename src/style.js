import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lobster:400|Satisfy:400|Raleway:400,500');
  html {
    height: 100%;
  }
  body {
    height: 100%;
    overflow-y: ${props => props.toggled || props.home || props.fullscreen ? 'hidden': 'scroll'};
    overflow-x: hidden;
  }
  #root {
    height: 100%;
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
}
`
