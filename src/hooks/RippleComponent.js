import React, { useRef, useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { isObjectNull } from '../utils'
import theme from '../theme'

const RippleComponent = ({ Component, ...rest }) => {
  const [ripples, setRipples] = useState([])
  const componentRef = useRef(null)
  useEffect(() => {
    const showRipple = (e) => {
      if (componentRef.current.contains(e.target)) {
        const width = componentRef.current.offsetWidth
        const height = componentRef.current.offsetHeight
        const pos = componentRef.current.getBoundingClientRect()
        const x = e.pageX - pos.left - (width / 2)
        const y = e.pageY - pos.top - (height / 2) - window.scrollY
        if (ripples.length > 0) {
          const newRipples = [...ripples, { x, y, width, height}]
          setRipples(newRipples)
        } else {
          setRipples([{ x, y, width, height}])
        }
      }
    }
    window.addEventListener('mousedown', showRipple)
    return () => {
      window.removeEventListener('mousedown', showRipple)
    }
  })
  return (
    <Component ref={componentRef} {...rest}>
      {ripples.length > 0 && ripples.map((ripple, index) => <Ripple {...ripple} key={index}/>)}
    </Component>
  )
}

export default RippleComponent

const ripple = keyframes`
  to {
    opacity: 0;
    transform: scale(3);
  }
`

const Ripple = styled.span`
  position: absolute;
  transform: scale(0);
  opacity: 0.75;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : theme.color.primary};
  border-radius: 100%;
  animation: ${ripple} 500ms ease-out;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`
