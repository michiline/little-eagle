import React from 'react'
import { useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { IconButton, Icon, Logo, H1, H2 } from '../basic'
import { MenuImg, LogoImg, LandscapeImg } from '../../images'
import { RippleComponent, useWindowWidth, useFloatingNav } from '../../hooks'
import theme from '../../theme'
import { scrollTo, to } from '../../utils'

const Component = ({ toggled, setToggled }) => {
  const [width] = useWindowWidth()
  const [show] = useFloatingNav()
  const history = useHistory()
  return (
    <Root show={show}>
      <RippleComponent Component={IconButton} onClick={() => setToggled(!toggled)} url={MenuImg}round={true}/>
      <HRoot>
        <H1 value={'LittleEagle'} {...styling.h1} onClick={() => scrollTo(0)}/>
        <H2 value={width > 380 ? 'Photography' : 'Photo'} {...styling.h2} onClick={() => scrollTo(0)}/>
      </HRoot>
      <Logo {...styling.logo} onClick={() => to({ history, url: '/'})}/>
    </Root>
  )
}

const Root = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  padding: ${theme.spacing(1)};
  z-index: 2;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-shadow: ${theme.shadow.dp4};
  justify-content: space-between;
  width: 100%;
  min-width: 100%;
  background-color: #FFFFFF;
  transition: all .2s cubic-bezier(.4,0,.2,.1);
  ${props => !props.show && css`
    top: -64px;
  `}

`

const HRoot = styled.div`
  display: flex;
`

const styling = {
  logo: {
    url: LogoImg,
    margin: { right: theme.spacing(1) }
  },
  h1: {
    margin: { right: theme.spacing(0.5), bottom: 'auto', top: 'auto' }
  },
  h2: {
    margin: { left: theme.spacing(0.5), top: theme.spacing(0.7) }
  }
}

export default Component
