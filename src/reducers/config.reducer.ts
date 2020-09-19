import { Action } from '../actions/action.interface'
import { LOAD_CONFIG_FAILED, LOAD_CONFIG_SUCCESS } from '../actions/config.actions'

export interface ConfigState {
  clientId: string
  discordApiURL: string
  error: boolean
  redirectUrl: string
  scopes: string[]
}

const initialState: ConfigState = {
  clientId: '',
  discordApiURL: '',
  error: false,
  redirectUrl: '',
  scopes: []
}

export const configReducer = (state: ConfigState = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_CONFIG_FAILED:
      return { ...initialState, error: true }
    case LOAD_CONFIG_SUCCESS:
      return { ...action.payload, error: false }
    default:
      return state
  }
}
