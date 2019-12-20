import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

import { GlobalStyle } from './style'
import { Header, Drawer, Overlay, Scrollbar } from './components'
import Home from './routes/Home'

const App = () => {
  const [toggled, setToggled] = useState(false)
  return (
    <BrowserRouter>
      <>
        <GlobalStyle toggled={toggled} />
        <Header toggled={toggled} setToggled={setToggled}/>
        <Drawer toggled={toggled} />
        <Overlay toggled={toggled} setToggled={setToggled}/>
        <Route exact path='/' component={Home} />
      </>
    </BrowserRouter>
  )
}




ReactDOM.render(<App />, document.getElementById('root'))
