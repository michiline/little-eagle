import React, { useState} from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router-dom'
import { RippleComponent } from '../../hooks'
import { H3, H4, Icon } from '../basic'
import { GalleryImg, PdfImg, ContactImg, LandscapeImg, PeopleImg, EventImg, PortraitImg, AboutImg, HomeImg } from '../../images'
import theme from '../../theme'
import { to } from '../../utils'

const Component = ({ history, theme, toggled, setToggled }) => {
  return (
    <>
      <Root toggled={toggled}>
        <RippleComponent Component={Row} url={HomeImg} value={'Home'} onClick={() => drawerClick({ history, url: '/', setToggled })}/>
        <RippleComponent Component={Row} url={GalleryImg} value={'Gallery'} onClick={() => drawerClick({ history, url: '/gallery', setToggled })}/>
        <RippleComponent Component={Row} url={PdfImg} value={'Portfolio'} />
        <RippleComponent Component={Row} url={AboutImg} value={'About Me'} onClick={() => drawerClick({ history, url: '/about', setToggled })}/>
        <RippleComponent Component={Row} url={ContactImg} value={'Contact'} onClick={() => drawerClick({ history, url: '/contact', setToggled })}/>
      </Root>
      <Overlay toggled={toggled} onClick={e => toggleOff({ setToggled })} />
    </>
  )
}

const Root = styled.div`
  width: 250px;
  height: 100vh;
  position: fixed;
  z-index: 3;
  top: 0;
  left: -250px;
  background: #FFFFFF;
  transition: left ease-in-out 0.3s;
  ${props => props.toggled &&`
    left: 0;
    box-shadow: ${props => props.theme.shadow.dp16};
  `}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.3s;
  background: #0000007D;
  opacity: ${props => props.toggled ? 1 : 0 };
  z-index: ${props => props.toggled ? 1 : -1 };
`

const Row = ({ url, value, active }) => (
  <SRow active={active}>
    <H3 value={value} />
  </SRow>
)

const SRow = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: ${props=> props.theme.spacing(1)};
`

const toggleOff = ({ setToggled}) => {
  setToggled(false)
}

const drawerClick = ({ setToggled, history, url }) => {
  toggleOff({ setToggled })
  to({ history, url })
}
export default withRouter(Component)

// @media only screen and (min-width: 600px) {
//     width: ${props => props.toggled ? '40%' : 0}
//   }
// @media only screen and (min-width: 1200px) {
//     width: ${props => props.toggled ? '15%' : 0}
//   }
// width: ${props => props.toggled ? '75%' : 0}
