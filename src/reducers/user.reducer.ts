import { Action } from '../actions/action.interface'
import { SET_USER } from '../actions/user.actions'

export interface UserState {
  avatar: string
  discriminator: string
  email: string
  flags: number
  guilds: GuildState[]
  id: string
  locale: string
  // eslint-disable-next-line camelcase
  mfa_enabled: boolean
  // eslint-disable-next-line camelcase
  public_flags: number
  username: string
  verified: boolean
}

export interface GuildState {
  features: string[]
  icon: string
  id: string
  name: string
  owner: boolean
  permissions: number
  // eslint-disable-next-line camelcase
  permissions_new: string
}

const initialState: UserState = {
  avatar: '',
  discriminator: '',
  email: '',
  flags: 0,
  guilds: [],
  id: '',
  locale: '',
  mfa_enabled: false,
  public_flags: 0,
  username: '',
  verified: false
}

export const userReducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.payload
      }
    default:
      return state
  }
}
