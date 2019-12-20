import React from 'react'
import styled from 'styled-components'
import { RippleComponent } from '../../hooks'
import theme from '../../theme'

const BaseButton = styled.button.attrs(props => ({
  type: 'button'
  }))`
  border: none
  cursor: pointer
  overflow: hidden
  position: relative
`

const IconButton = ({ ripple, ...rest }) => {
  if (!ripple) {
    return <SIconButton {...rest} />
  } else {
    return <RippleComponent Component={SIconButton} {...rest} />
  }
}

const SIconButton = styled(BaseButton)`
  background: url(${props => props.url}) center no-repeat
  width: 48px
  height: 48px
  border-radius: 50%
  &:hover {
    background-color: ${props => props.backgroundColor ? props.backgroundColor : theme.color.secondary}
  }
  &:focus {
    outline: none
  }
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
`

const Button = ({ value }) => {
  return (
    <BaseButton>{value}</BaseButton>
  )
}

export { Button, IconButton }
