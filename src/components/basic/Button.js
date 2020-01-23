import React from 'react'
import styled, { css } from 'styled-components'
import { RippleComponent } from '../../hooks'
import theme from '../../theme'

const BaseButton = styled.button.attrs(props => ({
  type: 'button'
  }))`
  border: none;
  outline: none;
  cursor: pointer;
  vertical-align: bottom;
`

export const IconButton = styled(BaseButton)`
  background: url(${props => props.url}) center no-repeat;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

export const Button = ({ value }) => {
  return (
    <BaseButton>{value}</BaseButton>
  )
}
