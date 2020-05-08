import React, { useRef, useState, useEffect } from 'react'
import _ from 'lodash'

const useFloatingNav = function () {
  const [y, setY] = useState(window.scrollY)
  const [show, setShow] = useState(window.scrollY <= 64)
  useEffect(() => {
    const scrollListener = (e) => {
      if (window.scrollY < y && !show || window.scrollY <= 64) {
        setShow(true)
      } else if (window.scrollY > y && show) {
        setShow(false)
      }
      setY(window.scrollY)
    }
    const throttledScrollListener = _.throttle(scrollListener, 100, { leading: true, trailing: true})
    window.addEventListener('scroll', throttledScrollListener)
    return () => window.removeEventListener('scroll', throttledScrollListener)
  })
  return [show]
}

export default useFloatingNav
