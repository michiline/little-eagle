import React, { useState} from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const Component = ({ toggled, setToggled }) => {
  return (
    <Root toggled={toggled} onClick={e => setToggled(!toggled)}>

    </Root>
  )
}

const Root = styled.div`
  width: 100%
  height: 100vh
  position: fixed
  top: 0
  left: 0
  transition: opacity 0.3s
  background: #0000007D
  opacity: ${props => props.toggled ? 1 : 0 }
  z-index: ${props => props.toggled ? 1 : -1 }
`

export default Component
