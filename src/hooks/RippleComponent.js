import React, { useRef, useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { sleep } from '../utils'
import theme from '../theme'

const RippleComponent = ({ Component, onClick, round, rippleColor, ...rest }) => {
  const [ripples, setRipples] = useState([])
  const rootRef = useRef(null)
  useEffect(() => {
    const showRipple = async (e) => {
      if (rootRef.current.contains(e.target)) {
        const width = rootRef.current.offsetWidth
        const height = rootRef.current.offsetHeight
        const pos = rootRef.current.getBoundingClientRect()
        const x = e.pageX - pos.left - (width / 2)
        const y = e.pageY - pos.top - (height / 2) - window.scrollY
        if (ripples.length > 0) {
          const newRipples = [...ripples, { x, y, width, height}]
          setRipples(newRipples)
        } else {
          setRipples([{ x, y, width, height}])
        }
        onClick && onClick()
      }
    }
    window.addEventListener('mousedown', showRipple)
    return () => {
      window.removeEventListener('mousedown', showRipple)
    }
  })
  return (
    <Root ref={rootRef} round={round}>
      <Component {...rest} />
      {ripples.length > 0 && ripples.map((ripple, index) => <Ripple {...ripple} rippleColor={rippleColor} key={index}/>)}
    </Root>

  )
}

export default RippleComponent

const Root = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${props => props.round ? '100%' : '0'};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.hoverColor ? props.hoverColor : theme.color.hover};
  }
  &:focus {
    outline: none;
  }
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:active {
    transform: translateY(2px);
  }
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const ripple = keyframes`
  to {
    opacity: 0;
    transform: scale(5);
  }
`

const Ripple = styled.span`
  position: absolute;
  transform: scale(0);
  opacity: 0.75;
  background-color: ${props => props.rippleColor ? props.rippleColor : theme.color.ripple};
  border-radius: 100%;
  animation: ${ripple} 1s ease;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: pointer;
`
