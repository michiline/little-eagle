import React from 'react'
import styled, { css } from 'styled-components'
import theme from '../../theme'

export const Logo = styled.button.attrs(props => ({
  type: 'button'
  }))`
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  background-image: url(${props => props.url});
  background-size: cover;
  background-color: transparent;
  ${props => props.width && props.height && css`
    width: ${props.width};
    height: ${props.height};
  `}
  width: 70px;
  height: 48px;
  ${props => props.margin && css`
    margin-left: ${props.margin.left ? props.margin.left : 0};
    margin-right: ${props.margin.right ? props.margin.right : 0};
    margin-top: ${props.margin.top ? props.margin.top : 0};
    margin-bottom: ${props.margin.bottom ? props.margin.bottom : 0};
  `}
`
