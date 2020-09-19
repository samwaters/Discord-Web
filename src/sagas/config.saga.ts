import { put, takeEvery } from '@redux-saga/core/effects'
import { LOAD_CONFIG, loadConfigFailed, loadConfigSuccess } from '../actions/config.actions'

declare var config

function * loadAppConfig() {
  if (config && config.version) {
    yield put(loadConfigSuccess(config))
  } else {
    yield put(loadConfigFailed())
  }
}

export function * configSaga() {
  yield takeEvery(LOAD_CONFIG, loadAppConfig)
}
