import React, { useRef } from 'react'
import styled from 'styled-components'
import { useJustifiedImages } from '../../hooks'

const Component = ({ imgUrls, onImgClick }) => {
  const [setImage, rows, images] = useJustifiedImages({ length: imgUrls.length })
  return (
    <>
      {setImages({ imgUrls, setImage, show: rows.length === 0 })}
      {renderRows({ rows, onImgClick })}
    </>
  )
}

const setImages = ({ imgUrls, setImage }) => {
  return imgUrls.map((imgUrl, index) => {
    const imgRef = useRef(null)
    return <SPreImage onLoad={() => setImage({
        ratio: imgRef.current.naturalWidth / imgRef.current.naturalHeight,
        index,
        src: imgUrl
      })} key={index} ref={imgRef} src={imgUrl}/>
  })
}

const renderRows = ({ rows, onImgClick }) => {
  return rows.map((row, index) => {
    return (
      <Row key={`r_${index}`}>
        {row.images.map((image, index) => {
          return (
            <SImage src={image.src} height={row.height} width={image.width} key={`i_${index}`} onClick={() => onImgClick(image.index)}/>
          )
        })}
      </Row>
    )
  })
}

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SImage = styled.img.attrs(props => ({
  src: props.src
  }))`
  background-size: cover;
  height: ${props => props.height};
  width: ${props => props.width};
  margin: 1px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

const Row = styled.div`
  display: flex;
  height: min-content;
  width: min-content;
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
