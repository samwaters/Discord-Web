import * as React from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Switch, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { DashboardModule } from '../../reducers/dashboard.reducer'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#424242'
  }
}))

interface DashboardContentProps {
  modules: any[]
}

export const DashboardContent = (props: DashboardContentProps) => {
  const styles = useStyles()
  return <>
    <Grid container spacing={1}>
      {props.modules.map((module: DashboardModule, i) => <Grid item key={'module-' + i} xs={12} md={4} xl={3}>
        <Card className={styles.root} variant='outlined'>
          <CardHeader
            action={<Switch
              checked={module.enabled}
              onChange={() => {
              }}
              name={'enable-module-' + module.id}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />}
            title={module.name}
          />
          <CardContent>
            <Typography color='secondary' variant='body1'>{module.description}</Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='outlined'>Manage {module.name}</Button>
          </CardActions>
        </Card>
      </Grid>)}
    </Grid>
  </>
}
