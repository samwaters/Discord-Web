import * as React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  centerAlign: { textAlign: 'center' },
  logo: { maxWidth: '300px' }
})

export const DashboardLoading = () => {
  const classes = useStyles()
  return <>
    <p className={classes.centerAlign}>
      <img className={classes.logo} src='https://discord.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg'/>
    </p>
    <Typography color='secondary' variant='body1'>Just a moment...</Typography>
    <Typography color='secondary' variant='body2'>We&apos;re just loading the details for the guild you selected</Typography>
  </>
}
