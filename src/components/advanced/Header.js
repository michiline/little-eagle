import React from 'react'
import styled from 'styled-components'
import { IconButton, Icon, Logo, H1, H2 } from '../basic'
import { MenuImg, LogoImg, LandscapeImg } from '../../images'
import { RippleComponent, useWindowWidth } from '../../hooks'
import theme from '../../theme'

const Component = ({ toggled, setToggled }) => {
  const [width] = useWindowWidth()
  return (
    <Root>
      <RippleComponent Component={IconButton} onClick={() => setToggled(!toggled)} url={MenuImg}round={true}/>
      <HRoot>
        <H1 value={'LittleEagle'} {...styling.h1}/>
        <H2 value={width > 380 ? 'Photography' : 'Photo'} {...styling.h2}/>
      </HRoot>
      <Logo {...styling.icon}/>
    </Root>
  )
}

const Root = styled.div`
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
`

const HRoot = styled.div`
  display: flex;
`

const styling = {
  icon: {
    url: LogoImg,
  },
  h1: {
    margin: { right: theme.spacing(0.5), bottom: 'auto', top: 'auto' }
  },
  h2: {
      margin: { left: theme.spacing(0.5), top: theme.spacing(0.5) }
  }
}

export default Component
