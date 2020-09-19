import { Action } from '../actions/action.interface'
import { SET_GUILD } from '../actions/settings.actions'

export interface SettingsState {
  currentGuild: number
}

const initialState: SettingsState = {
  currentGuild: 0
}

export const settingsReducer = (state: SettingsState = initialState, action: Action) => {
  switch (action.type) {
    case SET_GUILD:
      return { currentGuild: action.payload }
    default:
      return state
  }
}
