import { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'

const useImages = function ({ length }) {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  const [images, setImages] = useState([...Array(length)])
  const [leftoverImages, setLeftoverImages] = useState(length)
  const [rows, setRows] = useState([])
  useEffect(() => {
    if (leftoverImages === 0) {
      buildRows({ maxWidth: window.innerWidth - scrollbarWidth - 1, minRatio: (window.innerWidth - scrollbarWidth - 1) / 250 })
    }
    const listener = debounce(() => {
      buildRows({ maxWidth: window.innerWidth - scrollbarWidth - 1, minRatio: (window.innerWidth - scrollbarWidth - 1) / 250 })
    }, 100)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [leftoverImages])
  const buildRows = ({ maxWidth, minRatio }) => {
    const imagesCopy = [...images]
    const firstImage = imagesCopy.shift()
    const rowsRatio = imagesCopy.reduce((acc, image) => {
      let currentRow = acc[acc.length - 1]
      if (currentRow.ratio < minRatio) {
        currentRow.ratio += image.ratio
        currentRow.images.push(image)
        currentRow.height = maxWidth / currentRow.ratio
      } else {
        currentRow.height = maxWidth / currentRow.ratio
        acc.push({
          ratio: image.ratio, images: [image], width: maxWidth, height: maxWidth / image.ratio
        })
      }
      return acc
    }, [{
      ratio: firstImage.ratio, images: [firstImage]
    }])
    console.log(rowsRatio)
    const rowsWidth = rowsRatio.map((currentRow) => {
      currentRow.images = currentRow.images.map(curr => {
        curr.width = currentRow.height * curr.ratio - 2
        return curr
      })
      currentRow.width = currentRow.images.reduce((acc, curr) => {
        acc = acc + curr.width
        return acc
      }, 0)
      return currentRow
    })
    if (!rowsWidth[rowsWidth.length - 1].width) {
      rowsWidth.pop()
    }
    setRows(rowsWidth)

  }
  const setImage = ({ ratio, index, src }) => {
    let newImages = [...images]
    newImages[index] = {
      ratio,
      src
    }
    setImages(newImages)
    setLeftoverImages(leftoverImages - 1)
  }
  return [setImage, rows, images]
}

export default useImages
