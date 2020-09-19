import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../reducers'
import { Card, CardActions, CardContent, CardHeader, Grid, Switch, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface DashboardProps {

}

const modules = ['Dad Jokes', 'Quiz', 'Raffle', 'Trial Planner']
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#424242'
  }
}))

const dashboard = (props: DashboardProps) => {
  const styles = useStyles()
  return <>
    <Grid container spacing={1}>
      {modules.map((module, i) => <Grid item key={'module-' + i} xs={12} md={4} xl={2}>
        <Card className={styles.root} variant='outlined'>
          <CardHeader
            action={<Switch
              checked={true}
              onChange={() => {}}
              name={'enable-module-' + i}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />}
            title={module}
          />
          <CardContent>
            <Typography color='secondary' variant='body1'>Module Description</Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='outlined'>Manage {module}</Button>
          </CardActions>
        </Card>
      </Grid>)}
    </Grid>
  </>
}

export const Dashboard = connect(
  (state: AppState) => ({

  }),
  (dispatch) => ({

  })
)(dashboard)
