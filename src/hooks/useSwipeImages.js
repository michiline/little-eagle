import { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'

const useImages = function ({ length }) {
  const [images, setImages] = useState([...Array(length)])
  const [leftoverImages, setLeftoverImages] = useState(length)
  const [sizes, setSizes] = useState([])
  useEffect(() => {
    if (leftoverImages === 0) {
      setLeftoverImages(leftoverImages - 1)
      setSizes(getSizes(extractRatios(images)))
    }
  })
  const setImage = ({ ratio, index, src }) => {
    let newImages = [...images]
    newImages[index] = {
      ratio,
      src
    }
    setImages(newImages)
    setLeftoverImages(leftoverImages - 1)
  }
  const extractRatios = images => images.map(image => image.ratio)
  const getSizes = (ratios) => {
		const windowHeight = window.innerHeight - 20
		const windowWidth = document.body.clientWidth
		return ratios.map(ratio => {
			if (ratio < 1) {
				let height = windowHeight - 20
				let width = height * ratio
				while (height > windowHeight || width > windowWidth) {
					height = height * 0.99
					width = height * ratio
				}
				return {
					width: height * ratio,
					height: height,
					marginX: (document.body.clientWidth - width) / 2,
					marginY: (windowHeight - height) / 2,
				}
			}
			else {
				let height = windowHeight - 20
				let width = height * ratio
				while (height > windowHeight || width > windowWidth) {
					height = height * 0.99
					width = height * ratio
				}
				return {
					width,
					height,
					marginX: (document.body.clientWidth - width) / 2,
					marginY: (windowHeight - height) / 2,
				}
			}
		})
	}
  return [setImage, images, sizes]
}

export default useImages
