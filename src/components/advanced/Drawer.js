import React, { useState} from 'react'
import styled from 'styled-components'
import { RippleComponent } from '../../hooks'
import { Button, Icon } from '../basic'
import { LandscapeImg } from '../../images'
import theme from '../../theme'

const Component = ({ toggled }) => {
  return (
    <Root toggled={toggled}>
      <RippleComponent Component={Row} url={LandscapeImg} value={'Landscape'} />
    </Root>
  )
}

const Root = styled.div`
  width: 75%;
  height: 100vh;
  position: fixed;
  z-index: 3;
  top: 0;
  left: -75%;
  background: #FFFFFF;
  transition: left ease-in-out 0.3s;
  ${props => props.toggled &&`
    left: 0;
  `}
  display: flex;
  flex-direction: column;
`

const Row = ({ url, value }) => (
  <SRow>
    <Icon url={url} />
    <Button value={value} />
  </SRow>
)

const SRow = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
`
export default Component

// @media only screen and (min-width: 600px) {
//     width: ${props => props.toggled ? '40%' : 0}
//   }
// @media only screen and (min-width: 1200px) {
//     width: ${props => props.toggled ? '15%' : 0}
//   }
// width: ${props => props.toggled ? '75%' : 0}
