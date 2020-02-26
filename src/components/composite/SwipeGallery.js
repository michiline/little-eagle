import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { useSwipeImages, useMouseTouchSwipe } from '../../hooks'

const Component = ({ imgUrls, activeImgId }) => {
  const [setImage, images, sizes] = useSwipeImages({ length: imgUrls.length })
  useMouseTouchSwipe({ activeImgId, length: imgUrls.length })
  return (
    <>
    {setImages({ imgUrls, setImage })}
    <Root show={activeImgId !== -1}>
      <Container>
        {renderImages({ images, sizes })}
      </Container>
    </Root>
    </>
  )
}

const setImages = ({ imgUrls, setImage}) => {
  return imgUrls.map((imgUrl, index) => {
    const imgRef = useRef(null)
    return <SPreImage onLoad={() => setImage({
        ratio: imgRef.current.naturalWidth / imgRef.current.naturalHeight,
        index,
        src: imgUrl
      })} key={index} ref={imgRef} src={imgUrl}/>
  })
}

const renderImages = ({ images, sizes }) => {
  if (sizes.length !== 0) {
    return images.map((image, index) => <Img img={image} key={index} size={sizes[index]} />)
  } else {
    return null
  }
}

const Root = styled.div`
  position: fixed;
  top: 0; right: 0; left: 0; bottom: 0;
  background-color: #24272EC8;
  z-index: 5;
  width: 100%;
  height: 100vh;
`

const Container = styled.div.attrs({
  id: 'container'
  })
`
	min-height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  width: calc(var(--n)*100%);
  transform: translate(calc(var(--i, 0)/var(--n)*-100%));
	z-index: 7;
`

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
	width: ${props => props.size.width}px;
	height: ${props => props.size.height}px;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
	margin-left: ${props => props.size.marginX}px;
	margin-right: ${props => props.size.marginX}px;
	margin-top: ${props => props.size.marginY}px;
	margin-bottom: ${props => props.size.marginY}px;
`

const SPreImage = styled.img.attrs(props => ({
  src: props.src
  }))`
  background-size: cover;
  width: 0;
  height: 0;
  display: ${props => props.show ? 'initial': 'none'};
`


export default Component
