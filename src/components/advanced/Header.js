import React from 'react'
import styled from 'styled-components'
import { IconButton, Icon, H1, H2 } from '../basic'
import { MenuImg, LogoImg, LandscapeImg } from '../../images'
import { RippleComponent, useWindowWidth } from '../../hooks'
import theme from '../../theme'

const Component = ({ toggled, setToggled }) => {
  const [width] = useWindowWidth()
  return (
    <Root>
      <RippleComponent Component={IconButton} onClick={() => setToggled(!toggled)} url={MenuImg}round={true}/>
      <Icon {...styling.icon}/>
      <H1 value={'LittleEagle'} {...styling.h1}/>
      <H2 value={width > 400 ? 'Photography' : 'Photo'} {...styling.h2}/>
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
  box-shadow: ${theme.shadow.dp4}
`

const styling = {
  icon: {
    url: LogoImg,
    margin: { left: theme.spacing(1), right: theme.spacing(1) }
  },
  h1: {
    margin: { left: theme.spacing(1), right: theme.spacing(0.5) }
  },
  h2: {
    margin: { left: theme.spacing(0.5), top: theme.spacing(0.8), }
  }
}

export default Component
