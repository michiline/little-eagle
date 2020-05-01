import React from 'react'
import styled, { css, keyframes } from 'styled-components'
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
        <ScrollDown />
      </Img>
      <ContentRoot>
        <ContentCenter>
          <Header2>Hi, I'm Ana!</Header2>
          <Text first={true}>
            By degree a psychologist, by heart a photographer.
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
            If you have an idea, wish or vision, feel free to <Link href={'mailto:little.eagle.photo@pm.me'}>contact me</Link>.
          </Text>
          <Header2>Some random facts about me:</Header2>
          <List>
            <ListItem>I’m a true fan of traveling. If a weekend is free, I’m on the road.</ListItem>
            <ListItem>Camping is my new found passion. The goal is to increase my days spent in nature every year. </ListItem>
            <ListItem>I can eat a lot of ice-cream.</ListItem>
            <ListItem>And watermelon.</ListItem>
            <ListItem>I’m an introvert. Talking about me is hard, so imagine how much time it takes for me to write this.</ListItem>
            <ListItem>I don’t think anyone likes summer and sea more than me. </ListItem>
            <ListItem>My boyfriend and I have our travel blog. Check it out: <LinkHistory onClick={() => externalTo('http://www.leagleandmich.com')}> Leagle & Mich</LinkHistory></ListItem>
            <ListItem>I do yoga and have recently started including meditation in my everyday life. </ListItem>
            <ListItem>Little Eagle is my nickname because my surname in Croatian means just that!</ListItem>
          </List>
        </ContentCenter>
      </ContentRoot>
    </Root>
  )
}

const Root = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  @media only screen and (min-width: 1200px) {
    height: 100%;
    flex-direction: row;
  }
`

const Img = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${AboutImg});
  background-size: cover;
  background-position: bottom;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContentRoot = styled.div`
  height: 100%;
  width: 100%;
  max-width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  margin: 48px 0 32px 0;
  height: 100%;
  @media only screen and (min-width: 1200px) {
    margin: calc(48px + 64px) 0 32px 0;
    max-width: 460px !important;
  }
`

const Header = styled.p`
  font-size: 48px;
  letter-spacing: 0;
  line-height: 1.6;
  font-family: 'Satisfy';
  font-weight: 400;
  color: ${props => props.color};
  z-index: 1;
  user-select: none;
  color: white;
  margin-bottom: 32px;
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`

const Header2 = styled.p`
  font-size: 32px;
  letter-spacing: 0;
  line-height: 1.6;
  font-family: 'Satisfy';
  font-weight: 400;
  color: ${props => props.color};
  z-index: 1;
  user-select: none;
`

const Text = styled.p`
  margin-top: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(1)};
  ${props => props.last && css`
    margin-bottom: ${theme.spacing(2)};
  `}
  font-family: 'Raleway';
  font-size: 16px;
  letter-spacing: 0.7px;
  text-align: justify;
`

const List = styled.ul`
  padding-left: ${theme.spacing(2)};
  margin-top: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(1)};
  font-family: 'Raleway';
  font-size: 16px;
  letter-spacing: 0.7px;
  font-weight: 400;
  text-align: justify;
  list-style-position: outside;
`

const ListItem = styled.li`
  margin-top: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(1)};
`

const Link = styled.a`
  color: black;
  font-weight: bold;
`

const LinkHistory = styled.p`
  display: inline;
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
`

const bounce = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-1vw, 1vw);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
`

const ScrollDown = styled.span`
  position: absolute;
  bottom: 3vw;
  left: calc(50% - 7.5px - 1vw);
  width: calc(15px + 2vw);
  height: calc(15px + 2vw);
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(-45deg);
  animation: ${bounce} 2s infinite;
  box-sizing: border-box;
  opacity: 1;
  z-index: 2;
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`

export default Component
