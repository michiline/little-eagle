import { useState, useEffect } from 'react'

const useWindowWidth = function () {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const listener = (e) => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  })
  return [width, setWidth]
}

export default useWindowWidth
