import { useState, useEffect } from 'react'
import _ from 'lodash'

const useScrolledDirection = function ({ boundary }) {
  const [scrollY, setScrollY] = useState(window.scrollY)
  const [scrolled, setScrolled] = useState(checkScrolled({ boundary, scrollY }))
  useEffect(() => {
    const scrollListener = (e) => {
      setScrolled(checkScrolled({ boundary, scrollY}))
      setScrollY(window.scrollY)
    }
    const throttledScrollListener = _.throttle(scrollListener, 100, { leading: true, trailing: true})
    window.addEventListener('scroll', throttledScrollListener)
    return () => window.removeEventListener('scroll', throttledScrollListener)
  })
  return [scrollY, scrolled]
}

const checkScrolled = ({ boundary, scrollY }) => {
  if (window.scrollY === 0) {
    return false
  } else if (window.scrollY > boundary && window.scrollY > scrollY) {
    return true
  } else {
    return false
  }
}


export default useScrolledDirection
