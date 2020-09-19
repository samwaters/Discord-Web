import * as React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  centerAlign: { textAlign: 'center' },
  topSpacing: { marginTop: '10px' }
}))

interface LoginContentProps {
  navigate: (path: string) => void
  open: (path: string) => void
  tokenError: boolean
}

export const LoginContent = (props: LoginContentProps) => {
  const classes = useStyles()
  return <>
    {props.tokenError && <Typography color='secondary'>Do not be a moron!</Typography>}
    <Typography color='secondary' variant='h6'>Welcome to Just Fred! Log in with Discord below and get
      started!</Typography>
    <Typography className={classes.topSpacing} color='secondary' variant='body2'>Please note that you will need Manage
      Server permissions on the Discord server</Typography>
    <Typography color='secondary' variant='body2'>To add Just Fred to your server, please see the Installation
      Instructions before logging in</Typography>
    <p className={classes.centerAlign}>
      <Button color='primary' onClick={() => props.open('http://localhost:8080/api/auth/redirect')} variant='outlined'>Log In</Button>
    </p>
    <p className={classes.centerAlign}>
      <Button color='secondary' onClick={() => props.navigate('/installation')} variant='outlined'>Installation
        Instructions</Button>
    </p>
  </>
}
