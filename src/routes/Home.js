import React from 'react'
import styled from 'styled-components'
import { Gallery } from '../components'
import { LandscapeImg } from '../images'

const Home = () => {
  return (
    <Root>
      <Gallery />
    </Root>
  )
}

const Root = styled.div`
  min-height: 100%;
`

export default Home
