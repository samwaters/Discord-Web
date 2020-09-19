import { Action } from '../actions/action.interface'
import { READY } from '../actions/bootstrap.actions'

export interface BootstrapState {
  ready: boolean
}

const initialState: BootstrapState = {
  ready: false
}

export const bootstrapReducer = (state: BootstrapState = initialState, action: Action) => {
  switch (action.type) {
    case READY:
      return { ready: true }
    default:
      return state
  }
}
