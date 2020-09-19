export const LOAD_CONFIG = 'LOAD_CONFIG'
export const LOAD_CONFIG_FAILED = 'LOAD_CONFIG_FAILED'
export const LOAD_CONFIG_SUCCESS = 'LOAD_CONFIG_SUCCESS'

export const loadConfig = () => ({
  type: LOAD_CONFIG
})

export const loadConfigFailed = () => ({
  type: LOAD_CONFIG_FAILED
})

export const loadConfigSuccess = (config) => ({
  payload: config,
  type: LOAD_CONFIG_SUCCESS
})
