import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { RippleComponent } from '../../hooks'
import { H3 } from '../basic'
import theme from '../../theme'
import { to, externalTo } from '../../utils'

const Component = ({ history, theme, toggled, setToggled }) => {
  return (
    <>
      <Root toggled={toggled}>
        <RippleComponent Component={Row} value={'Home'} onClick={() => drawerClick({ history, url: '/', setToggled })}/>
        <RippleComponent Component={Row} value={'Gallery'} onClick={() => drawerClick({ history, url: '/gallery', setToggled })}/>
        <RippleComponent Component={Row} value={'Travel Blog'} onClick={() => drawerClick({ history, url: 'https://leagleandmich.com', setToggled })}/>
        <RippleComponent Component={Row} value={'About Me'} onClick={() => drawerClick({ history, url: '/about', setToggled })}/>
      </Root>
      <Overlay toggled={toggled} onClick={e => setToggled(false)} />
    </>
  )
}

const Root = styled.div`
  width: 250px;
  height: calc(100vh - 64px);
  position: fixed;
  z-index: 3;
  top: 64px;
  left: -250px;
  background: #FFFFFF;
  transition: left ease-in-out 0.3s;
  ${props => props.toggled &&`
    left: 0;
    box-shadow: ${props => props.theme.shadow.dp16};
  `}
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
`

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 64px;
  left: 0;
  transition: opacity 0.3s;
  background: #000000A0;
  opacity: ${props => props.toggled ? 1 : 0 };
  z-index: ${props => props.toggled ? 2 : -1 };
`

const Row = ({ url, value, active }) => (
  <SRow active={active}>
    <SH3 value={value} />
  </SRow>
)

const SRow = styled.div`
  height: 50px;
  width: 250px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: ${props=> props.theme.spacing(1)};
`

const SH3 = styled(H3)`
  font-weight: 500;
  padding-left: ${theme.spacing(2)};
`

const drawerClick = ({ setToggled, history, url }) => {
  setToggled(false)
  if (url.startsWith('http')) {
    externalTo(url)
  } else {
    to({ history, url })
  }

}


export default withRouter(Component)

// @media only screen and (min-width: 600px) {
//     width: ${props => props.toggled ? '40%' : 0}
//   }
// @media only screen and (min-width: 1200px) {
//     width: ${props => props.toggled ? '15%' : 0}
//   }
// width: ${props => props.toggled ? '75%' : 0}
