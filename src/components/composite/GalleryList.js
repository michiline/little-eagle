import React from 'react'
import { useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { H1 } from '../basic'
import theme from '../../theme'

const Component = ({ content }) => {
  const history = useHistory()
  return (
    <Root>
      <Grid>
        {content.map(({url, ...rest}, index) =>
          <ImgContainer onClick={e => to({ history, url })} key={index} first={index === 0} last={index === content.length - 1}>
            <OverlayGrey />
            <OverlayCentered>
              <OverlayRow>{rest.title}</OverlayRow>
            </OverlayCentered>
            <Img {...rest}/>
          </ImgContainer>
        )}
      </Grid>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = styled(H1)`
  margin: ${theme.spacing(1)};
  padding: ${theme.spacing(1)};
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: min-content;
`

const ImgContainer = styled.div`
  width: calc(100vw - ${theme.spacing(4)});
  height: calc(100vw - ${theme.spacing(4)});
  position: relative;
  border: ${theme.shadow.dp1};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  margin-left: ${theme.spacing(2)};
  margin-right: ${theme.spacing(2)};
  margin-top: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(1)};
  ${props => props.first && css`
    margin-top: ${theme.spacing(2)};
  `}
  ${props => props.last && css`
    margin-bottom: ${theme.spacing(2)};
  `}
`

const Img = styled.img.attrs(props => ({
  src: props.src
  }))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const OverlayGrey = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0.3;
  background-color: #24272E;
`

const OverlayRow = styled.p`
  font-size: 2rem;
  letter-spacing: 0;
  line-height: 1.6;
  padding: ${theme.spacing(1)};
  font-family: 'Satisfy';
  font-weight: 400;
  color: white;
  z-index: 1;
  user-select: none;
`

const OverlayCentered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  text-align: center;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  &:active ${OverlayRow} {
    transform: translateY(2px);
  }
`

const to = ({ history, url }) => {
  history.push(url)
}

// <JustifiedGallery imgUrls={homeImages()}/>

export default Component
