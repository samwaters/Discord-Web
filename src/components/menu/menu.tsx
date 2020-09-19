import * as React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'

const useStyles = makeStyles({
  paper: {
    backgroundColor: '#666666'
  }
})

export const StyledMenu = (props) => {
  const classes = useStyles()
  return <Menu classes={{ paper: classes.paper }} {...props} />
}
