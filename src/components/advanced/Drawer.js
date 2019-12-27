import React, { useState} from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router-dom'
import { RippleComponent } from '../../hooks'
import { H3, H4, Icon } from '../basic'
import { GalleryImg, PdfImg, ContactImg, LandscapeImg, PeopleImg, EventImg, PortraitImg, AboutImg, HomeImg } from '../../images'
import theme from '../../theme'
import { to } from '../../utils'

const Component = ({ history, theme, toggled, setToggled }) => {
  const [topic, setTopic] = useState('none')
  console.log(history)
  return (
    <>
      <Root toggled={toggled}>
        <RippleComponent Component={Row} url={HomeImg} value={'Home'} onClick={() => drawerClick({ history, url: '/', setToggled, setTopic })}/>
        <RippleComponent Component={Row} url={GalleryImg} value={'Gallery'} onClick={() => topic === 'none' ? setTopic('gallery') : setTopic('none') } active={topic === 'gallery'}/>
        {topic === 'gallery' &&
          <>
            <RippleComponent Component={RowTopic} url={LandscapeImg} value={'Landscape'} onClick={() => drawerClick({ history, url: '/gallery/landscape', setToggled, setTopic })}/>
            <RippleComponent Component={RowTopic} url={PeopleImg} value={'People'} onClick={() => drawerClick({ history, url: '/gallery/people', setToggled, setTopic })}/>
            <RippleComponent Component={RowTopic} url={EventImg} value={'Events'} onClick={() => drawerClick({ history, url: '/gallery/events', setToggled, setTopic })}/>
          </>
        }
        <RippleComponent Component={Row} url={PdfImg} value={'Portfolio'} />
        <RippleComponent Component={Row} url={AboutImg} value={'About Me'} onClick={() => drawerClick({ history, url: '/about', setToggled, setTopic })}/>
        <RippleComponent Component={Row} url={ContactImg} value={'Contact'} onClick={() => drawerClick({ history, url: '/contact', setToggled, setTopic })}/>
      </Root>
      <Overlay toggled={toggled} onClick={e => toggleOff({ setToggled, setTopic })} />
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

const toggleOff = ({ setToggled, setTopic}) => {
  setToggled(false)
  setTopic('none')
}

const drawerClick = ({ setToggled, setTopic, history, url }) => {
  toggleOff({ setToggled, setTopic })
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
