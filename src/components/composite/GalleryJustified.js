import React from 'react'
import styled, { css } from 'styled-components'
import JustifiedGallery from './JustifiedGallery'
import theme from '../../theme'
import { galleryImages } from '../../images'

const Component = ({ match, history }) => {
  return (
    <Root>
      <JustifiedGallery imgUrls={galleryImages[match.params.galleryName]}/>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
  margin-bottom: 1px;
`

export default Component
