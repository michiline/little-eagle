import React from 'react'
import styled from 'styled-components'
import { RippleComponent } from '../../hooks'
import { AboutImg } from '../../images'
import { FacebookImg, InstagramImg } from '../../images'
import { IconButton } from '../basic'
import theme from '../../theme'
import { externalTo } from '../../utils'

const Component = () => {
  return (
    <Root>
      <Img src={AboutImg}>
        <Header>About Me</Header>
      </Img>
      <Text first={true}>
        Hi, I’m Ana! By degree a psychologist, by heart a photographer.
        Based in Zagreb (Croatia), but available worldwide.
      </Text>
      <Text>
        I don't like to be in front of the camera, but I love being the person behind it.
        Capturing special moments and creating unforgettable memories gives me the feeling of excitement and fills me with joy.
      </Text>
      <Text>
        I am constantly learning and improving my skills through various workshops and photography courses.
        With my style still evolving, I am open to different ideas and projects.
      </Text>
      <Text last={true}>
        If you have an idea, wish or vision, feel free to contact me.
      </Text>

    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

const Img = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${AboutImg});
  background-size: cover;
  width: 100vw;
  height: 66vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = styled.p`
  font-size: 32px;
  letter-spacing: 0;
  line-height: 1.6;
  padding: ${theme.spacing(1)};
  font-family: 'Satisfy';
  font-weight: 400;
  color: white;
  z-index: 1;
  user-select: none;
`

const Text = styled.p`
  margin-top: ${props => props.first ? theme.spacing(2) : theme.spacing(1)};
  margin-bottom: ${props => props.last ? theme.spacing(2) : theme.spacing(1)};
  font-family: 'Raleway';
  font-size: 16px;
  letter-spacing: 0.7px;
  font-weight: 400;
  width: 80%;
  text-align: justify;
`

export default Component
