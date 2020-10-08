import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { authReducer, AuthState } from './auth.reducer'
import { bootstrapReducer, BootstrapState } from './bootstrap.reducer'
import { configReducer, ConfigState } from './config.reducer'
import { dashboardReducer, DashboardState } from './dashboard.reducer'
import { userReducer, UserState } from './user.reducer'

export interface AppState {
  auth: AuthState,
  bootstrap: BootstrapState
  config: ConfigState
  dashboard: DashboardState
  router: any
  user: UserState
}

export const createRootReducer = (history) => combineReducers({
  auth: authReducer,
  bootstrap: bootstrapReducer,
  config: configReducer,
  dashboard: dashboardReducer,
  router: connectRouter(history),
  user: userReducer
})
