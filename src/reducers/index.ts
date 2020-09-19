import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { authReducer, AuthState } from './auth.reducer'
import { bootstrapReducer, BootstrapState } from './bootstrap.reducer'
import { configReducer, ConfigState } from './config.reducer'
import { settingsReducer, SettingsState } from './settings.reducer'
import { userReducer, UserState } from './user.reducer'

export interface AppState {
  auth: AuthState,
  bootstrap: BootstrapState
  config: ConfigState
  router: any
  settings: SettingsState
  user: UserState
}

export const createRootReducer = (history) => combineReducers({
  auth: authReducer,
  bootstrap: bootstrapReducer,
  config: configReducer,
  router: connectRouter(history),
  settings: settingsReducer,
  user: userReducer
})
