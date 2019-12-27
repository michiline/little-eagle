import React, { useState} from 'react'
import styled, { css } from 'styled-components'
import { RippleComponent } from '../../hooks'
import { H3, H4, Icon } from '../basic'
import { GalleryImg, PdfImg, ContactImg, LandscapeImg, PeopleImg, EventImg, PortraitImg, AboutImg } from '../../images'
import theme from '../../theme'

const Component = ({ theme, toggled, setToggled }) => {
  const [topic, setTopic] = useState('none')
  return (
    <>
      <Root toggled={toggled}>
        <RippleComponent Component={Row} url={GalleryImg} value={'Gallery'} onClick={() => topic === 'none' ? setTopic('gallery') : setTopic('none') } active={topic === 'gallery'}/>
        {topic === 'gallery' &&
          <>
            <RippleComponent Component={RowTopic} url={LandscapeImg} value={'Landscape'}/>
            <RippleComponent Component={RowTopic} url={PeopleImg} value={'People'}/>
            <RippleComponent Component={RowTopic} url={EventImg} value={'Events'}/>
          </>
        }
        <RippleComponent Component={Row} url={PdfImg} value={'Portfolio'} />
        <RippleComponent Component={Row} url={AboutImg} value={'About Me'} />
        <RippleComponent Component={Row} url={ContactImg} value={'Contact Me'} />
      </Root>
      <Overlay toggled={toggled} onClick={e => toggle({ toggled, setToggled, setTopic })} />
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
    <Icon url={url} margin={{ left: theme.spacing(1), right: theme.spacing(1) }}/>
    <H3 value={value} margin={{ left: theme.spacing(2) }} />
  </SRow>
)

const RowTopic = ({ url, value }) => (
  <SRow>
    <Icon url={url} margin={{ left: theme.spacing(3), right: theme.spacing(1) }}/>
    <H4 value={value} margin={{ left: theme.spacing(1) }} />
  </SRow>
)

const SRow = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: ${props=> props.theme.spacing(1)};
`

const toggle = ({ toggled, setToggled, setTopic}) => {
  setToggled(!toggled)
  setTopic('none')
}

export default Component

// @media only screen and (min-width: 600px) {
//     width: ${props => props.toggled ? '40%' : 0}
//   }
// @media only screen and (min-width: 1200px) {
//     width: ${props => props.toggled ? '15%' : 0}
//   }
// width: ${props => props.toggled ? '75%' : 0}
