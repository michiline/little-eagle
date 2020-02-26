import React from 'react'
import styled, { css } from 'styled-components'
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
      <Text spacingTop={4}>
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
      <Text spacingBottom={2}>
        If you have an idea, wish or vision, feel free to contact me.
      </Text>
      <Text bold={true} spacingTop={2} spacingBottom={2}>Few random facts about me:</Text>
      <List>
        <ListItem>I’m a true fan of traveling. If a weekend is free, I’m on the road.</ListItem>
        <ListItem>Camping is my new found passion. The goal is to increase my days spent in nature every year. </ListItem>
        <ListItem>I can eat a lot of ice-cream.</ListItem>
        <ListItem>And watermelon.</ListItem>
        <ListItem>I’m an introvert. Talking about me is hard, so imagine how much time it takes for me to write this.</ListItem>
        <ListItem>I don’t think anyone likes summer and sea more than me. </ListItem>
        <ListItem>My boyfriend and I have our travel blog. Check it out: www.leagleandmich.com</ListItem>
        <ListItem>I do yoga and have recently started including meditation in my everyday life. </ListItem>
        <ListItem>Little Eagle is my nickname because my surname in Croatian means just that!</ListItem>
      </List>
      <Text bold={true} first={true} spacingTop={2} spacingBottom={2}>Education:</Text>
      <Text italic={true}>
        Portrait and studio lightning workshop by Igor Dugandžić (Udruga Fotovun; November, 2019)
      </Text>
      <Text italic={true}>
        Adobe Lightroom (Udemy digital course: ”Adobe Lightroom Classic CC & CC: Photo Editing Masterclass” July, 2019)
      </Text>
      <Text italic={true}>
        Advanced digital photography (Udruga Fotoklub Zagreb; May-June, 2019)
      </Text>
      <Text italic={true} spacingBottom={4}>
        Basics of digital photography (Udruga Fotoklub Zagreb; March-April, 2019)
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
  max-height: calc(100vh - 64px);
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
  margin-top: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(1)};
  ${props => props.spacingTop && css`
    margin-top: ${theme.spacing(props.spacingTop)};
  `}
  ${props => props.spacingBottom && css`
    margin-bottom: ${theme.spacing(props.spacingBottom)};
  `}
  ${props => props.bold && css`
    font-weight: 700;
  `}
  ${props => props.italic && css`
    font-style: italic;
  `}
  font-family: 'Raleway';
  font-size: 16px;
  letter-spacing: 0.7px;
  width: 75%;
  text-align: justify;
  max-width: 600px;
`

const List = styled.ul`
  ${props => props.spacingTop && css`
    margin-top: ${theme.spacing(props.spacingTop)};
  `}
  ${props => props.spacingBottom && css`
    margin-bottom: ${theme.spacing(props.spacingBottom)};
  `}
  font-family: 'Raleway';
  font-size: 16px;
  letter-spacing: 0.7px;
  font-weight: 400;
  width: 75%;
  max-width: 600px;
  text-align: justify;
  list-style-position: inside;
`

const ListItem = styled.li`
  margin-top: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(1)};
`

export default Component
