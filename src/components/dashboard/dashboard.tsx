import * as React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import { dashboardLoad } from '../../actions/dashboard.actions'
import { AppState } from '../../reducers'
import { DashboardModule } from '../../reducers/dashboard.reducer'
import { GuildState } from '../../reducers/user.reducer'
import { DashboardContent } from './content'
import { DashboardError } from './error'
import { DashboardLoading } from './loading'

interface DashboardProps {
  dashboardLoad: () => void
  error: Boolean
  guilds: GuildState[]
  lastSelectedGuildId: string
  loading: Boolean
  modules: DashboardModule[]
}

const dashboard = (props: DashboardProps) => {
  useEffect(() => {
    props.dashboardLoad()
  }, [])
  return <Grid container >
    <Grid item sm={1} xl={3}></Grid>
    <Grid item sm={10} xl={6}>
      { props.error && <DashboardError currentGuildName={props.guilds[props.lastSelectedGuildId].name} retry={props.dashboardLoad}/> }
      { !props.error && props.loading && <DashboardLoading /> }
      { !props.error && !props.loading && <DashboardContent modules={props.modules} /> }
    </Grid>
  </Grid>
}

export const Dashboard = connect(
  (state: AppState) => ({
    error: state.dashboard.error,
    guilds: state.user.guilds,
    lastSelectedGuildId: state.user.lastSelectedGuildId,
    loading: state.dashboard.loading,
    modules: state.dashboard.modules
  }),
  (dispatch) => ({
    dashboardLoad: () => dispatch(dashboardLoad())
  })
)(dashboard)
