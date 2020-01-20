import React from 'react'
import styled from 'styled-components'
import { CoverImg } from '../images'

const Component = () => {
  return (
    <Root>

    </Root>
  )
}

const Root = styled.div`
  min-height: 100%;
  height: calc(100vh - 80px);
  background-image: url(${CoverImg});
  background-size: cover;
  background-position: right;
`

export default Component
