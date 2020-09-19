import { put, takeEvery } from '@redux-saga/core/effects'

import { BOOTSTRAP } from '../actions/bootstrap.actions'
import { loadConfig } from '../actions/config.actions'

function * bootstrap() {
  yield put(loadConfig())
}

export function * bootstrapSaga() {
  yield takeEvery(BOOTSTRAP, bootstrap)
}
