import React from 'react'
import styled, { css } from 'styled-components'
import theme from '../../theme'

const Icon = styled.button.attrs(props => ({
  type: 'button'
  }))`
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  background: url(${props => props.url}) center no-repeat;
  width: 48px;
  height: 48px;
  ${props => props.width && props.height && css`
    width: ${props.width};
    height: ${props.height};
  `}
  ${props => props.margin && css`
    margin-left: ${props.margin.left ? props.margin.left : 0};
    margin-right: ${props.margin.right ? props.margin.right : 0};
    margin-top: ${props.margin.top ? props.margin.top : 0};
    margin-bottom: ${props.margin.bottom ? props.margin.bottom : 0};
  `}
`

export { Icon }
