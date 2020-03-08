import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import JustifiedGallery from './JustifiedGallery'
import SwipeGallery from './SwipeGallery'
import theme from '../../theme'
import { galleryImages } from '../../images'

const Component = ({ match, history, setFullscreen }) => {
  const [activeImgId, setActiveImgId] = useState(-1)
  return (
    <Root>
      <JustifiedGallery imgUrls={galleryImages[match.params.galleryName]} onImgClick={id => setActiveImgId(id)}/>
      { activeImgId !== -1 && <SwipeGallery imgUrls={galleryImages[match.params.galleryName]} setActiveImgId={setActiveImgId} activeImgId={activeImgId} setFullscreen={setFullscreen}/>}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 119px);
  margin-top: 64px;
`

export default Component
