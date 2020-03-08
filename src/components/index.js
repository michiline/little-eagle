import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { Header, Drawer, Gallery, Home, About, Footer } from './composite'
import { GlobalStyle } from '../style'

export const App = () => {
  const history = useHistory()
  const [toggled, setToggled] = useState(false)
  const [home, setHome] = useState(history.location.pathname === '/')
  const [fullscreen, setFullscreen] = useState(false)
  useEffect(() => {
    history.listen(({ pathname }) => setHome(pathname === '/'), [])
  })
  return (
    <>
      <GlobalStyle toggled={toggled} home={home} fullscreen={fullscreen} />
      <Header toggled={toggled} setToggled={setToggled}/>
      <Drawer toggled={toggled} setToggled={setToggled}/>
      <Route exact path='/' component={Home} />
      <Route path='/gallery' render={(props) => <Gallery {...props} setFullscreen={setFullscreen} />} />
      <Route path='/about' component={About} />
      {history.location.pathname !== '/' && <Footer />}
    </>
  )
}
