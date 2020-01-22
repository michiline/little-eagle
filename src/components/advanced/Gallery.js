import React from 'react'
import styled from 'styled-components'
import JustifiedGallery from './JustifiedGallery'
import { homeImages } from '../../images'

const Component = ({ match }) => {
  return (
    <Root>
      <JustifiedGallery imgUrls={homeImages()}/>
    </Root>
  )
}

const Root = styled.div`
  min-height: 100%;
`

export default Component
