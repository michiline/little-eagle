import React from 'react'
import styled from 'styled-components'
import { Gallery } from '../components'
import { homeImages } from '../images'

const Component = () => {
  return (
    <Root>
      <Gallery imgUrls={homeImages()}/>
    </Root>
  )
}

const Root = styled.div`
  min-height: 100%;
`

export default Component
