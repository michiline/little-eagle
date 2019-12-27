import React, { useState} from 'react'
import styled from 'styled-components'
import { RippleComponent } from '../../hooks'
import { H3, Icon } from '../basic'
import { LandscapeImg, PeopleImg, CityImg, PortraitImg, EventImg } from '../../images'
import theme from '../../theme'

const Component = ({ theme, toggled }) => {
  return (
    <Root toggled={toggled}>
      <RippleComponent Component={Row} url={PeopleImg} value={'People'} />
      <RippleComponent Component={Row} url={LandscapeImg} value={'Landscape'} />
      <RippleComponent Component={Row} url={EventImg} value={'Events'} />
      <RippleComponent Component={Row} url={CityImg} value={'City'} />
    </Root>
  )
}

const Root = styled.div`
  width: 60%;
  height: 100vh;
  position: fixed;
  z-index: 3;
  top: 0;
  left: -75%;
  background: #FFFFFF;
  transition: left ease-in-out 0.3s;
  ${props => props.toggled &&`
    left: 0;
    box-shadow: ${props => props.theme.shadow.dp16};
  `}
  display: flex;
  flex-direction: column;
`

const Row = ({ url, value }) => (
  <SRow>
    <Icon url={url} margin={{ left: theme.spacing(1), right: theme.spacing(1) }}/>
    <H3 value={value} margin={{ left: theme.spacing(2), top: theme.spacing(0.5)}} />
  </SRow>
)

const SRow = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: ${props=> props.theme.spacing(1)}
`

export default Component

// @media only screen and (min-width: 600px) {
//     width: ${props => props.toggled ? '40%' : 0}
//   }
// @media only screen and (min-width: 1200px) {
//     width: ${props => props.toggled ? '15%' : 0}
//   }
// width: ${props => props.toggled ? '75%' : 0}
