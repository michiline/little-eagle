import React from 'react'
import styled from 'styled-components'
import { RippleComponent } from '../../hooks'
import { CoverImg } from '../../images'
import { FacebookImg, InstagramImg } from '../../images'
import { IconButton } from '../basic'
import theme from '../../theme'
import { externalTo } from '../../utils'

const Component = () => {
  return (
    <Root>
      <Header>The world through my lens.</Header>
      <IconContainer>
        <RippleComponent Component={IconButton} url={FacebookImg} rippleColor={'#FFFFFF7C'} round={true} onClick={() => externalTo('https://www.facebook.com/littleeaglephoto')}/>
        <RippleComponent Component={IconButton}  url={InstagramImg} rippleColor={'#FFFFFF7C'} round={true} onClick={() => externalTo('https://www.instagram.com/littleeaglephoto')}/>
      </IconContainer>
    </Root>
  )
}

const Root = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${CoverImg});;
  background-size: cover;
  background-position: right;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(0.5)};
  margin-right: ${theme.spacing(1)};
  margin-bottom: 64px;
`

const Header = styled.p`
  font-size: 36px;
  letter-spacing: 0;
  line-height: 1.6;
  padding: ${theme.spacing(1)};
  font-family: 'Satisfy';
  font-weight: 400;
  color: white;
  z-index: 1;
  user-select: none;
  text-align: center;
`

export default Component
