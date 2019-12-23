import React from 'react'
import styled, { css } from 'styled-components'
import theme from '../../theme'

export const H1 = ({ value, ...rest }) =>
  <SH1 {...rest}>
    {value}
  </SH1>

export const H2 = ({ value, ...rest }) =>
  <SH2 {...rest}>
    {value}
  </SH2>

const SText = styled.p`
  ${props => props.margin && css`
    margin-left: ${props.margin.left ? props.margin.left : 0};
    margin-right: ${props.margin.right ? props.margin.right : 0};
    margin-top: ${props.margin.top ? props.margin.top : 0};
    margin-bottom: ${props.margin.bottom ? props.margin.bottom : 0};
  `}
  align-self: center;
`

const SH1 = styled(SText)`
  color: '#1d1d1b';
  font-family: 'Lobster';
  font-size: 26px;

`

const SH2 = styled(SText)`
  color: '#52514e';
  font-family: 'Satisfy';
  font-size: 26px;
`
