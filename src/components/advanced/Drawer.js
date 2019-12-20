import React, { useState} from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const Component = ({ toggled }) => {
  return (
    <Root toggled={toggled}>

    </Root>
  )
}

const Root = styled.div`
  @media only screen and (min-width: 600px) {
      width: ${props => props.toggled ? '40%' : 0}
    }
  @media only screen and (min-width: 1200px) {
      width: ${props => props.toggled ? '15%' : 0}
    }
  width: ${props => props.toggled ? '75%' : 0}
  height: 100vh
  position: fixed
  z-index: 3
  top: 0
  left: 0
  transition: width 0.3s
  background: red

`

const Link = styled.button`
  display: block
  transition: 0.3s
`
export default Component
