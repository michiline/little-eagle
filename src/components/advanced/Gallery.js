import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { LandscapeImg } from '../../images'
import { useImages } from '../../hooks'

const Component = () => {
  const rowHeight = 150
  const [imgUrls] = useState([
    `${process.env.PUBLIC_URL}/img/gallery/home/img0.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img1.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img2.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img3.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img4.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img5.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img6.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img7.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img8.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img9.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img10.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img11.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img12.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img13.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img14.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img15.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img16.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img17.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img18.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img19.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img20.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img21.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img22.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img23.jpg`
  ])
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
  width: calc(100% - 4px);
  height: ${props => `${props.height}px`};
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-top: 4px;
  margin-bottom: 4px;
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
