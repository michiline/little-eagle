import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import theme from './theme'
import { App } from './components'

const AppContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('root'))
