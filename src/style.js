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
  }
  body {
    overflow: ${props => props.toggled ? 'hidden': 'auto'};
  }
}
`
