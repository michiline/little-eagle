import React from 'react'
import styled from 'styled-components'
import JustifiedGallery from './JustifiedGallery'
import { homeImages } from '../../images'
import { Switch, Route, withRouter } from 'react-router-dom'
import GalleryList from './GalleryList'
import GalleryJustified from './GalleryJustified'
import content from '../../content'

const Component = ({ match, setFullscreen }) => {
  return (
    <Switch>
      <Route exact path={match.path} render={(props) => <GalleryList {...props} content={content.home}/>} />
      <Route exact path={`${match.path}/projects`} render={(props) => <GalleryList {...props} content={content.projects}/>} />
      <Route exact path={`${match.path}/projects/:galleryName`} render={(props) => <GalleryJustified {...props} setFullscreen={setFullscreen}/>}/>
      <Route exact path={`${match.path}/:galleryName`} render={(props) => <GalleryJustified {...props} setFullscreen={setFullscreen}/>}/>
    </Switch>
  )
}

const Root = styled.div`
  min-height: 100%;
`

export default withRouter(Component)
