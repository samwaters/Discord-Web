import { call, put, select, takeEvery } from '@redux-saga/core/effects'
import { push } from 'connected-react-router'
import { v4 } from 'uuid'

import {
  CHECK_FOR_TOKEN,
  checkForTokenFailed,
  checkForTokenSuccess,
  EXCHANGE_TOKEN,
  exchangeTokenFailed,
  exchangeTokenSuccess,
  generateState,
  LOG_IN_SUCCESS,
  logInFailed,
  logInSuccess,
  VALIDATE_TOKEN,
  validateToken,
  validateTokenFailed,
  validateTokenSuccess
} from '../actions/auth.actions'
import { Action } from '../actions/action.interface'
import { setUser } from '../actions/user.actions'
import { authenticatedGet, post } from '../util/http'
import { AppState } from '../reducers'

// Called on login page
function * checkForToken() {
  let state = window.localStorage.getItem('state')
  if (!state) {
    state = v4()
    window.localStorage.setItem('state', state)
  }
  yield put(generateState(state))
  const token = window.localStorage.getItem('token')
  if (token) {
    yield put(checkForTokenSuccess(token))
    yield put(validateToken())
  } else {
    yield put(checkForTokenFailed())
  }
}

// Exchange a token for an access token
function * exchangeToken(action: Action) {
  try {
    const auth = yield select((state: AppState) => state.auth)
    const config = yield select((state: AppState) => state.config)
    if (action.payload.state !== auth.state) {
      throw new Error('State does not match')
    }
    const oauthToken = yield call(
      post,
      `${config.apiUrl}/api/auth/token`,
      { token: action.payload.token }
    )
    const mappedToken = JSON.stringify({
      accessToken: oauthToken.access_token,
      createdAt: oauthToken.createdAt,
      expiresIn: oauthToken.expires_in,
      refreshToken: oauthToken.refresh_token,
      scope: oauthToken.scope,
      tokenType: oauthToken.token_type,
      tokenValidated: true
    })
    window.localStorage.setItem('token', mappedToken)
    yield put(exchangeTokenSuccess(mappedToken))
    const me = yield call(authenticatedGet, `${config.apiUrl}/api/users/me`)
    yield put(setUser(me))
    yield put(logInSuccess())
  } catch {
    yield put(exchangeTokenFailed())
    yield put(logInFailed())
  }
}

function * loginSucceeded () {
  yield put(push('/'))
}

// Check that a pre-existing access_token is valid
function * validateAccessToken() {
  try {
    const config = yield select((state: AppState) => state.config)
    const me = yield call(authenticatedGet, `${config.apiUrl}/api/users/me`)
    yield put(validateTokenSuccess())
    yield put(setUser(me))
    yield put(logInSuccess())
  } catch {
    yield put(validateTokenFailed())
    yield put(logInFailed())
  }
}

export function * authSaga() {
  yield takeEvery(CHECK_FOR_TOKEN, checkForToken)
  yield takeEvery(EXCHANGE_TOKEN, exchangeToken)
  yield takeEvery(LOG_IN_SUCCESS, loginSucceeded)
  yield takeEvery(VALIDATE_TOKEN, validateAccessToken)
}
