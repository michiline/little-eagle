import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, useHistory } from 'react-router-dom'
import { GlobalStyle } from '../style'
import { homeImages } from '../images'
import {
  Button, IconButton,
  Icon,
  Logo,
  H1, H2, H3,
} from './basic'

import {
  Header,
  Drawer,
  Gallery,
  Home
} from './advanced'

export const App = () => {
  const history = useHistory()
  const [toggled, setToggled] = useState(false)
  const [hidden, setHidden] = useState(history.location.pathname === '/')
  useEffect(() => {
    history.listen(({ pathname }) => setHidden(pathname === '/'), [])
  })
  return (
    <Root>
      <GlobalStyle hidden={hidden} />
      <Header toggled={toggled} setToggled={setToggled} setHidden={setHidden}/>
      <Drawer toggled={toggled} setToggled={setToggled} setHidden={setHidden}/>
      <Route exact path='/' component={Home} />
      <Route exact path='/gallery' component={() => <Gallery imgUrls={homeImages()} />} />
    </Root>
  )
}

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
