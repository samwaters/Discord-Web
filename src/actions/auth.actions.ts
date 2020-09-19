export const CHECK_FOR_TOKEN = 'CHECK_FOR_TOKEN'
export const CHECK_FOR_TOKEN_FAILED = 'CHECK_FOR_TOKEN_FAILED'
export const CHECK_FOR_TOKEN_SUCCESS = 'CHECK_FOR_TOKEN_SUCCESS'
export const EXCHANGE_TOKEN = 'EXCHANGE_TOKEN'
export const EXCHANGE_TOKEN_FAILED = 'EXCHANGE_TOKEN_FAILED'
export const EXCHANGE_TOKEN_SUCCESS = 'EXCHANGE_TOKEN_SUCCESS'
export const LOG_IN = 'LOG_IN'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_OUT = 'LOG_OUT'
export const LOG_OUT_FAILED = 'LOG_OUT_FAILED'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const VALIDATE_TOKEN = 'VALIDATE_TOKEN'
export const VALIDATE_TOKEN_FAILED = 'VALIDATE_TOKEN_FAILED'
export const VALIDATE_TOKEN_SUCCESS = 'VALIDATE_TOKEN_SUCCESS'

export const checkForToken = () => ({
  type: CHECK_FOR_TOKEN
})

export const checkForTokenFailed = () => ({
  type: CHECK_FOR_TOKEN_FAILED
})

export const checkForTokenSuccess = (token: string) => ({
  type: CHECK_FOR_TOKEN_SUCCESS,
  payload: token
})

export const exchangeToken = (token: string) => ({
  type: EXCHANGE_TOKEN,
  payload: token
})

export const exchangeTokenFailed = () => ({
  type: EXCHANGE_TOKEN_FAILED
})

export const exchangeTokenSuccess = (token: string) => ({
  type: EXCHANGE_TOKEN_SUCCESS,
  payload: token
})

export const logIn = () => ({
  type: LOG_IN
})

export const logInFailed = () => ({
  type: LOG_IN_FAILED
})

export const logInSuccess = () => ({
  type: LOG_IN_SUCCESS
})

export const logOut = () => ({
  type: LOG_OUT
})

export const logOutFailed = () => ({
  type: LOG_OUT_FAILED
})

export const logOutSuccess = () => ({
  type: LOG_OUT_SUCCESS
})

export const validateToken = () => ({
  type: VALIDATE_TOKEN
})

export const validateTokenFailed = () => ({
  type: VALIDATE_TOKEN_FAILED
})

export const validateTokenSuccess = () => ({
  type: VALIDATE_TOKEN_SUCCESS
})
