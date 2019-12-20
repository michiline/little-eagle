import React from 'react'
import styled from 'styled-components'
import { IconButton } from '../basic'
import { MenuImg } from '../../images'
import theme from '../../theme'

const Component = ({ toggled, setToggled }) => {
  return (
    <Root>
      <IconButton url={MenuImg} onClick={e => setToggled(!toggled)} ripple={true}/>
    </Root>
  )
}

const Root = styled.div`
  display: flex
  padding: ${theme.spacing(1)}
  z-index: 2
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export default Component
