import { Action } from '../actions/action.interface'
import { DASHBOARD_LOAD, DASHBOARD_LOAD_FAILURE, DASHBOARD_LOAD_SUCCESS } from '../actions/dashboard.actions'

export interface DashboardModule {
  description: string
  enabled: boolean
  id: number
  name: string
}

export interface DashboardState {
  error: Boolean
  loading: Boolean
  modules: DashboardModule[]
}

const initialState: DashboardState = {
  error: false,
  loading: true,
  modules: []
}

export const dashboardReducer = (state: DashboardState = initialState, action: Action) => {
  switch (action.type) {
    case DASHBOARD_LOAD:
      return {
        ...state,
        error: false,
        loading: true
      }
    case DASHBOARD_LOAD_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        modules: []
      }
    case DASHBOARD_LOAD_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        modules: action.payload.modules
      }
    default:
      return state
  }
}
