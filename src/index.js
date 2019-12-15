import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import { GlobalStyle } from './style'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Route exact path='/' component={Home} />
      </>
    </BrowserRouter>
  )
}




ReactDOM.render(<App />, document.getElementById('root'))
