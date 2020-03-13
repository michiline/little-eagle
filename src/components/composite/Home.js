import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { RippleComponent } from '../../hooks'
import { CoverImg } from '../../images'
import { FacebookImg, InstagramImg } from '../../images'
import { H3 } from '../basic'
import theme from '../../theme'
import { externalTo } from '../../utils'

const Component = () => {
  const history = useHistory()
  return (
    <Root>
      <Header>The world through my lens.</Header>
      <LinkContainer>
        <LinkLeft onClick={() => history.push('/gallery')}>Gallery</LinkLeft>
        <Divider />
        <LinkRight onClick={() => history.push('/about')}>About me</LinkRight>
      </LinkContainer>
    </Root>
  )
}

// <IconContainer>
//   <RippleComponent Component={IconButton} url={FacebookImg} rippleColor={'#FFFFFF7C'} round={true} onClick={() => externalTo('https://www.facebook.com/littleeaglephoto')}/>
//   <RippleComponent Component={IconButton}  url={InstagramImg} rippleColor={'#FFFFFF7C'} round={true} onClick={() => externalTo('https://www.instagram.com/littleeaglephoto')}/>
// </IconContainer>


const Root = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${CoverImg});;
  background-size: cover;
  background-position: right;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`

const Link = styled.p`
  color: white;
  font-family: 'Raleway';
  font-size: 24px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
  @media only screen and (min-width: 600px) {
    font-size: 30px;
  }
`

const LinkLeft = styled(Link)`
  margin-right: ${theme.spacing(3)};
`

const LinkRight = styled(Link)`
  margin-left: ${theme.spacing(3)};
`

const Divider = styled.div`
  height: 30px;
  width: 0px;
  border: 1px solid white;
`

// const IconContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: ${theme.spacing(0.5)};
//   margin-right: ${theme.spacing(1)};
//   margin-bottom: 64px;
// `

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
