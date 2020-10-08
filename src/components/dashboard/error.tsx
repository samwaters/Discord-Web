import * as React from 'react'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface DashboardErrorProps {
  currentGuildName: string
  retry: () => void
}

const useStyles = makeStyles({
  centerAlign: { textAlign: 'center' }
})

export const DashboardError = (props: DashboardErrorProps) => {
  const classes = useStyles()
  return <>
    <Typography color='secondary' variant='h6'>We could not load the dashboard for {props.currentGuildName}</Typography>
    <Typography color='primary' variant='body2'>Please make sure the Bot has been added to the guild and that you have the Manage Server permission</Typography>
    <p className={classes.centerAlign}>
      <Button color='primary' onClick={() => props.retry()} variant='outlined'>Retry</Button>
    </p>
  </>
}
