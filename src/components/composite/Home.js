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
      <IconContainer>
        <RippleComponent Component={IconButton} url={FacebookImg} rippleColor={'#FFFFFF7C'} round={true} onClick={() => externalTo('https://www.facebook.com/littleeaglephoto')}/>
        <RippleComponent Component={IconButton}  url={InstagramImg} rippleColor={'#FFFFFF7C'} round={true} onClick={() => externalTo('https://www.instagram.com/littleeaglephoto')}/>
      </IconContainer>
    </Root>
  )
}

const Root = styled.div`
  background-image: url(${CoverImg});
  background-size: cover;
  background-position: right;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(0.5)};
  margin-right: ${theme.spacing(1)};
`

export default Component
