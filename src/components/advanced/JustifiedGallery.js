import React, { useRef } from 'react'
import styled from 'styled-components'
import { useImages } from '../../hooks'

const Component = ({ imgUrls }) => {
  const [setImage, rows, images] = useImages({ length: imgUrls.length })
  return (
    <Root>
      {setImages({ imgUrls, setImage, show: rows.length === 0 })}
      {renderRows({ rows })}
    </Root>
  )
}

const setImages = ({ imgUrls, setImage, show }) => {
  return imgUrls.map((imgUrl, index) => {
    const imgRef = useRef(null)
    return <SPreImage onLoad={() => setImage({
        ratio: imgRef.current.naturalWidth / imgRef.current.naturalHeight,
        index,
        src: imgUrl
      })} key={index} ref={imgRef} src={imgUrl} show={show}/>
  })
}

const renderRows = ({ rows }) => {
  return rows.map((row, index) => {
    return (
      <Row key={`r_${index}`}>
        {row.images.map((image, index) => {
          return (
            <SImage src={image.src} height={row.height} width={image.width} key={`i_${index}`}/>
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

const SImage = styled.img.attrs(props => ({
  src: props.src
  }))`
  background-size: cover;
  height: ${props => props.height};
  width: ${props => props.width};
  margin: 1px;
`

export default Component
