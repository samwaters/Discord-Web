import * as React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { push } from 'connected-react-router'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { checkForToken, exchangeToken } from '../../actions/auth.actions'
import { AppState } from '../../reducers'
import { LoginContent } from './content'
import { LoginValidate } from './validate'

const useStyles = makeStyles((theme) => ({
  centerAlign: { textAlign: 'center' },
  logo: { maxWidth: '300px' },
  topSpacing: { marginTop: '10px' }
}))

interface LoginProps {
  accessToken: string
  checkForToken: () => void
  exchangeToken: (token: string) => void
  loggedIn: boolean
  navigate: (path: string) => void
  tokenError: boolean
  tokenValidated: boolean
}

const messageHandler = (props: LoginProps) => {
  window.onmessage = (message) => {
    if (message.data && message.data.type === 'TOKEN_EVENT') {
      props.exchangeToken(message.data.code)
    }
  }
}

const windowOpener = (path: string) => {
  const ref = window.open(
    path,
    'discordOAuth',
    'menubar=0,toolbar=0,status=0,location=0,resizable=0,width=500,height=800'
  )
  ref.focus()
}

const login = (props: LoginProps) => {
  const classes = useStyles()
  useEffect(() => {
    props.checkForToken()
    messageHandler(props)
  }, [])
  return <Container>
    <Grid container >
      <Grid item sm={1} md={3}></Grid>
      <Grid item sm={10} md={6}>
        <p className={classes.centerAlign}>
          <img className={classes.logo} src='https://discord.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg'/>
        </p>
        { !props.accessToken && <LoginContent tokenError={props.tokenError} navigate={props.navigate} open={windowOpener} /> }
        { props.accessToken && !props.tokenValidated && <LoginValidate /> }
        { props.accessToken && props.tokenValidated && <Redirect to='/' /> }
      </Grid>
    </Grid>
  </Container>
}

export const Login = connect(
  (state: AppState) => ({
    accessToken: state.auth.accessToken,
    loggedIn: state.auth.loggedIn,
    tokenError: state.auth.error,
    tokenValidated: state.auth.tokenValidated
  }),
  (dispatch) => ({
    checkForToken: () => dispatch(checkForToken()),
    exchangeToken: (token: string) => dispatch(exchangeToken(token)),
    navigate: (path: string) => dispatch(push(path))
  })
)(login)
