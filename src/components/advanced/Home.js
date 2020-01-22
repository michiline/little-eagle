import React from 'react'
import styled from 'styled-components'
import { CoverImg } from '../../images'

const Component = () => {
  return (
    <Root>
    </Root>
  )
}

const Root = styled.div`
  background-image: url(${CoverImg});
  background-size: cover;
  background-position: right;
  height: 100%;
`

export default Component
