import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { LandscapeImg } from '../../images'
import { useImages } from '../../hooks'

const Component = ({ imgUrls }) => {
  const rowHeight = 150
  const [images, updateImage, galleryHeight] = useImages(imgUrls.map((url, index) => {return { src: url, width: 0, height: 0, naturalWidth: 0, naturalHeight: 0 }}))

  return (
    <Root height={galleryHeight}>
      <GalleryRoot height={galleryHeight}>
      {renderImages({ images, updateImage })}
      </GalleryRoot>
    </Root>
  )
}

const renderImages = ({ images, updateImage }) => images.map((image, index) => {
  return <GalleryImage
    {...image}
    updateImage={updateImage}
    index={index}
    key={index}
    />
})

const Root = styled.div`
  display: flex;
`

const GalleryRoot = styled.div`
  width: 100%;
  height: ${props => `${props.height}px`};
  display: flex;
  flex-wrap: wrap;
`

const GalleryImage = ({ updateImage, index, ...rest }) => {
  const imgRef = useRef(null)
  return <SImg onLoad={() => updateImage({ image: {
    naturalWidth: imgRef.current.naturalWidth,
    naturalHeight: imgRef.current.naturalHeight,
    ratio: imgRef.current.naturalWidth / imgRef.current.naturalHeight
  }, index })} ref={imgRef} {...rest} />
}

const SImg = styled.img.attrs(props => ({
  src: props.src
  }))`
  background-size: cover;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 1px;
`

export default Component

// const initRow = ({ WINDOW_WIDTH, MAX_ROW_HEIGHT, handicap  }) => {
//   return {
//     height: 0,
//     minRatio: (WINDOW_WIDTH - handicap) / MAX_ROW_HEIGHT,
//     currentRatio: 0,
//     elements: []
//   }
// }
