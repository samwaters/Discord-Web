import { Action } from '../actions/action.interface'
import {
  CHECK_FOR_TOKEN_FAILED,
  CHECK_FOR_TOKEN_SUCCESS,
  EXCHANGE_TOKEN_FAILED,
  EXCHANGE_TOKEN_SUCCESS,
  GENERATE_STATE,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILED,
  LOG_OUT_SUCCESS,
  VALIDATE_TOKEN_FAILED,
  VALIDATE_TOKEN_SUCCESS
} from '../actions/auth.actions'

export interface AuthState {
  accessToken: string
  createdAt: number
  error: boolean
  expiresIn: number
  loggedIn: boolean
  refreshToken: string
  scope: string
  state: string
  tokenType: string
  tokenValidated: boolean
}

const errorState: Partial<AuthState> = {
  accessToken: '',
  createdAt: 0,
  error: true,
  expiresIn: 0,
  loggedIn: false,
  refreshToken: '',
  scope: '',
  tokenType: '',
  tokenValidated: false
}

const initialState: AuthState = {
  accessToken: '',
  createdAt: 0,
  error: false,
  expiresIn: 0,
  loggedIn: false,
  refreshToken: '',
  scope: '',
  state: '',
  tokenType: '',
  tokenValidated: false
}

export const authReducer = (state: AuthState = initialState, action: Action) => {
  switch (action.type) {
    case CHECK_FOR_TOKEN_FAILED:
      return {
        ...state,
        accessToken: '',
        tokenValidated: false
      }
    case CHECK_FOR_TOKEN_SUCCESS:
    case EXCHANGE_TOKEN_SUCCESS:
      const token = JSON.parse(action.payload)
      return {
        ...state,
        ...token,
        error: false,
        tokenValidated: false
      }
    case GENERATE_STATE:
      return {
        ...state,
        state: action.payload
      }
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      }
    case LOG_OUT_FAILED:
      return {
        ...state,
        error: true
      }
    case LOG_OUT_SUCCESS:
      return {
        ...initialState
      }
    case EXCHANGE_TOKEN_FAILED:
    case VALIDATE_TOKEN_FAILED:
      return {
        ...state,
        ...errorState
      }
    case VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        tokenValidated: true
      }
    default:
      return state
  }
}
