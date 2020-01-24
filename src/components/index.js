import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { Header, Drawer, Gallery, Home, Footer } from './advanced'
import { GlobalStyle } from '../style'

export const App = () => {
  const [toggled, setToggled] = useState(false)
  const history = useHistory()
  const [hidden, setHidden] = useState(history.location.pathname === '/')
  useEffect(() => {
    history.listen(({ pathname }) => setHidden(pathname === '/'), [])
  })
  return (
    <>
      <GlobalStyle toggled={toggled} hidden={hidden} />
      <Header toggled={toggled} setToggled={setToggled}/>
      <Drawer toggled={toggled} setToggled={setToggled}/>
      <Route exact path='/' component={Home} />
      <Route path='/gallery' component={Gallery} />
      {history.location.pathname !== '/' && <Footer />}
    </>
  )
}
