import React from 'react'
import styled from 'styled-components'
import JustifiedGallery from './JustifiedGallery'
import { homeImages } from '../../images'
import { Switch, Route } from 'react-router-dom'
import GalleryHome from './GalleryHome'
import GalleryRoute from './GalleryRoute'

const Component = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={GalleryHome} />
      <Route exact path={`${match.path}/:galleryName`} component={GalleryRoute} />
    </Switch>
  )
}

const Root = styled.div`
  min-height: 100%;
`

// <JustifiedGallery imgUrls={homeImages()}/>

export default Component
