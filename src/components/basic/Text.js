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

export const H3 = ({ value, ...rest }) =>
  <SH3 {...rest}>
    {value}
  </SH3>

export const H4 = ({ value, ...rest }) =>
  <SH4 {...rest}>
    {value}
  </SH4>

export const H5 = ({ value, ...rest }) =>
  <SH5 {...rest}>
    {value}
  </SH5>


const SText = styled.p`
  ${props => props.margin && css`
    margin-left: ${props.margin.left ? props.margin.left : 0};
    margin-right: ${props.margin.right ? props.margin.right : 0};
    margin-top: ${props.margin.top ? props.margin.top : 0};
    margin-bottom: ${props.margin.bottom ? props.margin.bottom : 0};
  `}
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  align-self: center;
  &:focus {
    outline: none;
  }
`

const SH1 = styled(SText)`
  color: '#1d1d1b';
  font-family: 'Lobster';
  font-size: 30px;
  cursor: pointer;
`

const SH2 = styled(SText)`
  color: '#52514e';
  font-family: 'Satisfy';
  font-size: 23px;
  cursor: pointer;
`

const SH3 = styled(SText)`
  color: '#1d1d1b';
  font-family: 'Raleway';
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 500;
`

const SH4 = styled(SText)`
  color: '#1d1d1b';
  font-family: 'Raleway';
  font-size: 16px;
  letter-spacing: 0.7px;
  font-weight: 400;
`

const SH5 = styled(SText)`
  color: '#1d1d1b';
  font-family: 'Raleway';
  font-size: 12px;
  letter-spacing: 0.4px;
  font-weight: 400;
`
