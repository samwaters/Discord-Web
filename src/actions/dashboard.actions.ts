export const DASHBOARD_LOAD = 'DASHBOARD_LOAD'
export const DASHBOARD_LOAD_FAILURE = 'DASHBOARD_LOAD_FAILURE'
export const DASHBOARD_LOAD_SUCCESS = 'DASHBOARD_LOAD_SUCCESS'

export const dashboardLoad = () => ({
  type: DASHBOARD_LOAD
})

export const dashboardLoadFailure = () => ({
  type: DASHBOARD_LOAD_FAILURE
})

export const dashboardLoadSuccess = (details: any) => ({
  type: DASHBOARD_LOAD_SUCCESS,
  payload: details
})
