import * as React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowDropDown, Info, SportsEsports } from '@material-ui/icons'
import { AppState } from '../../reducers'
import { GuildState } from '../../reducers/user.reducer'
import { StyledMenu } from '../menu/menu'
import { StyledMenuItem } from '../menu/menuitem'
import { selectGuild } from '../../actions/user.actions'

const useStyles = makeStyles({
  title: {
    flexGrow: 1
  }
})

interface HeaderProps {
  avatar: string
  currentGuild: number
  guilds: {[id: string]: GuildState}
  lastSelectedGuildId: number
  loggedIn: boolean
  navigate: (path: string) => void
  setGuild: (guild: number) => void
  userId: string
  username: string
}

const header = (props: HeaderProps) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleSelect = (index, props) => {
    props.setGuild(index)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return <div>
    <AppBar position='static'>
      <Toolbar>
        <IconButton aria-label='menu' edge='start' color='inherit' onClick={() => props.navigate('/')}>
          <SportsEsports />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          Just Fred
        </Typography>
        {
          props.loggedIn && <>
            <Button
              color='secondary'
              endIcon={<ArrowDropDown />}
              onClick={handleClick}
              variant='outlined'
            >
              {props.guilds[props.currentGuild]?.name || 'UNKNOWN'}
            </Button>
            <StyledMenu
              id='guild-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              { Object.keys(props.guilds).map((guildId) =>
                <StyledMenuItem key={'guild-' + guildId} onClick={() => handleSelect(guildId, props)} selected={guildId === '2'}>
                  <Avatar alt={props.guilds[guildId].name} src={`//cdn.discordapp.com/icons/${props.guilds[guildId].id}/${props.guilds[guildId].icon}.png`}/>
                  {props.guilds[guildId].name}
                </StyledMenuItem>
              )}
            </StyledMenu>
          </>
        }
        <IconButton
          color='inherit'
          onClick={() => props.navigate('/about')}
        >
          <Info />
        </IconButton>
        {
          props.loggedIn && <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            color="inherit"
          >
            <Avatar alt={props.username} src={`//cdn.discordapp.com/avatars/${props.userId}/${props.avatar}.png`}/>
          </IconButton>
        }
      </Toolbar>
    </AppBar>
  </div>
}

export const Header = connect(
  (state: AppState) => ({
    avatar: state.user.avatar,
    currentGuild: state.user.lastSelectedGuildId,
    guilds: state.user.guilds,
    loggedIn: state.auth.loggedIn,
    userId: state.user.id,
    username: state.user.username
  }),
  (dispatch) => ({
    navigate: (path: string) => dispatch(push(path)),
    setGuild: (guild: number) => dispatch(selectGuild(guild))
  })
)(header)
