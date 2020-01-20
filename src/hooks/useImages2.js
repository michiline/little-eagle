import React, { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'

const useImages = function (initialImages = []) {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + 1
  const GOAL_HEIGHT = window.innerHeight / 3
  const [images, setImages] = useState(initialImages)
  const [counter, setCounter] = useState(initialImages.length)
  const [currentId, setCurrentId] = useState(0)
  const [galleryHeight, setGalleryHeight] = useState(0)
  useEffect(() => {
    const listener = debounce(() => {
      resize({ windowWidth: window.innerWidth - scrollbarWidth })
    }, 25)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  })
  const updateImage = ({ image, index }) => {
    let newImages = [...images]
    newImages[index] = {
      ...newImages[index],
      ...image
    }
    setImages(newImages)
    const newCounter = counter - 1
    setCounter(newCounter)
    if (newCounter === 0) {
      resize({ windowWidth: window.innerWidth - scrollbarWidth })
    }
  }
  const resize = ({ windowWidth }) => {
    let row = {
      height: 0,
      minRatio: windowWidth / GOAL_HEIGHT,
      currentRatio: 0,
      elements: []
    }
    let totalHeight = 0
    for (let i = 0; i < images.length; i++) {
      let image = images[i]
      if (image.ratio) {
        row.currentRatio += image.ratio
        row.elements.push(image)
        if (row.currentRatio > row.minRatio) {
          row.height = windowWidth / row.currentRatio
          row.elements.map(elem => {
            elem.height = row.height
            elem.width = row.height * (elem.ratio) - 2
            return elem
          })
          const totalWidth = row.elements.reduce((acc, elem) => {
            acc = acc + elem.width
            return acc
          },0)
          totalHeight += row.height
          row = {
            height: 0,
            minRatio: windowWidth / GOAL_HEIGHT,
            currentRatio: 0,
            elements: []
          }
          setGalleryHeight(totalHeight)
        }
      }
    }
  }

  return [images, updateImage, galleryHeight]
}

export default useImages
