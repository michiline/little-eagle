import styled from 'styled-components'
import React from 'react'
import { AppBar, Button } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MoreIcon from '@material-ui/icons/MoreVert'
import { useMediaQuery } from '@material-ui/core'

const Component = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton}>
            <MenuIcon className={classes.menuIcon}/>
          </IconButton>
          <Logo src={`${process.env.PUBLIC_URL}/logo.jpg`} />
          <Typography variant="h5" className={classes.title}>
            Little Eagle
          </Typography>
          {SubtitleQuery({ className: classes.subtitle })}
          <Button className={classes.button}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

//

export default Component

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  toolbar: {
    minHeight: 'min-content',
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#FFFFFF'
  },
  menuIcon: {
    color: '#1d1d1b'
  },
  title: {
    marginLeft: theme.spacing(2),
    alignSelf: 'center',
    color: '#1d1d1b',
    fontFamily: 'Lobster'
  },
  subtitle: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    alignSelf: 'center',
    color: '#52514e',
    fontFamily: 'Satisfy',
    flexGrow: 1
  },
  button: {
    color: '#1d1d1b',
    alignSelf: 'center'
  },
}))

const SubtitleQuery = ({ className }) => {
  const matches = useMediaQuery('(min-width:362px)')
  return (
    <Typography variant="h6" className={className}>
      {matches ? 'Photography' : 'Photo'}
    </Typography>
  )
}

const Logo = styled.img.attrs(props => ({
  src: props.src
  }))`
  object-fit: cover
  height: 48px
`

const Links = styled.div`
  width: 100%;
  background-Color: red
  align-self: center
  justify-content: flex-end
`
