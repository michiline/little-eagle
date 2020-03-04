import React from 'react'
import styled from 'styled-components'
import { RippleComponent } from '../../hooks'
import { FacebookImg, InstagramImg } from '../../images'
import { IconButton, H5 } from '../basic'
import theme from '../../theme'
import { externalTo } from '../../utils'

const Footer = ({ history }) => {
  return (
    <Container>
      <IconContainer>
        <RippleComponent Component={IconButton} url={FacebookImg} round={true} onClick={() => externalTo('https://www.facebook.com/littleeaglephoto')}/>
        <RippleComponent Component={IconButton}  url={InstagramImg} round={true} onClick={() => externalTo('https://www.instagram.com/littleeaglephoto')}/>
      </IconContainer>
      <Link href={'mailto:little.eagle.photo@pm.me'}>little.eagle.photo@pm.me</Link>
      <Title value={'© 2020 Little Eagle Photography'} />
    </Container>
  )
}

const Container = styled.div`
  background-color: #1d1d1b;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: ${theme.spacing(0.5)};
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(0.5)};
`

const Title = styled(H5)`
  padding: ${theme.spacing(0.5)};
  color: #FFFFFFD2;
  margin-bottom: ${theme.spacing(1)};
`

const Link = styled.a`
  color: #FFFFFFD2;
  font-weight: bold;
  font-family: 'Raleway';
  font-size: 16px;
  letter-spacing: 0.7px;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    color: white;
  }
  margin-bottom: ${theme.spacing(0.5)};
`


export default Footer
