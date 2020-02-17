import React from 'react'
import styled from 'styled-components'
import JustifiedGallery from './JustifiedGallery'
import { homeImages } from '../../images'
import { Switch, Route } from 'react-router-dom'
import GalleryList from './GalleryList'
import GalleryJustified from './GalleryJustified'
import content from '../../content'

const Component = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={() => <GalleryList content={content.home} />} />
      <Route exact path={`${match.path}/projects`} component={() => <GalleryList content={content.projects} />} />
      <Route exact path={`${match.path}/projects/:galleryName`} component={GalleryJustified}/>
      <Route exact path={`${match.path}/:galleryName`} component={GalleryJustified}/>
    </Switch>
  )
}

const Root = styled.div`
  min-height: 100%;
`

// <JustifiedGallery imgUrls={homeImages()}/>

export default Component
