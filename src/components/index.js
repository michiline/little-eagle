import React, { useState } from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { Button, IconButton } from './basic'
import { Icon } from './basic'
import { H1, H2, H3 } from './basic'
import { Header, Drawer, Gallery, Home } from './advanced'
import { GlobalStyle } from '../style'

export const App = () => {
  const [toggled, setToggled] = useState(false)
  return (
    <Root>
      <GlobalStyle toggled={toggled} />
      <Header toggled={toggled} setToggled={setToggled}/>
      <Drawer toggled={toggled} setToggled={setToggled}/>
      <Route exact path='/' component={Home} />
      <Route path='/gallery' component={Gallery} />
    </Root>
  )
}

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
