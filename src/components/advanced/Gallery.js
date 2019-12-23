import React, { useState } from 'react'
import styled from 'styled-components'
import { GalleryImage } from '../basic'
import { LandscapeImg } from '../../images'
import { useArray } from '../../hooks'

const Component = () => {
  const rowHeight = 150
  const [imgUrls] = useState([
    `${process.env.PUBLIC_URL}/img/gallery/home/img0.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img1.jpg`,
    `${process.env.PUBLIC_URL}/img/gallery/home/img2.jpg`
  ])
  const [images, updateImage] = useArray(imgUrls.map((url, index) => {return { src: url, width: 0, height: 0, naturalWidth: 0, naturalHeight: 0 }}))
  return (
    <Root>
      {renderImages({ images, updateImage })}
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
  width: 100%;
  height: 100vh;
`

export default Component
