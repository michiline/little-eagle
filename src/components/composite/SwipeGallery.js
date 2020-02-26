import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { useSwipeImages, useMouseTouchSwipe } from '../../hooks'
import { arrow, X } from '../../images'

const Component = ({ imgUrls, setActiveImgId, activeImgId }) => {
  const [setImage, images, sizes] = useSwipeImages({ length: imgUrls.length })
  const [previous, next] = useMouseTouchSwipe({ activeImgId, length: imgUrls.length })
  return (
    <>
    {setImages({ imgUrls, setImage })}
    <Root show={activeImgId !== -1}>
      <Previous onClick={() => previous()}/>
      <Container>
        {renderImages({ images, sizes })}
      </Container>
      <Next onClick={() => next()}/>
      <Close onClick={() => setActiveImgId(-1)} />
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

const Next = styled.div`
  position: absolute;
  bottom: calc(50% - 25px);
  right: 2%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 8;
  opacity: 0.6;
	background-image: url(${arrow.next});
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
`

const Previous = styled.div`
  position: absolute;
  bottom: calc(50% - 25px);
  left: 2%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 8;
  opacity: 0.6;
	background-image: url(${arrow.previous});
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
`

const Close = styled.div`
  position: absolute;
  top: 1%;
  right: 1%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 8;
  background-image: url(${X});
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
`

export default Component
