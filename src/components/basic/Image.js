import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import theme from '../../theme'

export const GalleryImage = ({ updateImage, index, ...rest }) => {
  const imgRef = useRef(null)
  return <SImg onLoad={() => updateImage({ elem: {
    naturalWidth: imgRef.current.naturalWidth,
    naturalHeight: imgRef.current.naturalHeight
  }, index })} ref={imgRef} {...rest} />
}

const SImg = styled.img.attrs(props => ({
  src: props.src
  }))`
  background-size: cover;
  width: ${props => props.width};
  height: ${props => props.height};
`
