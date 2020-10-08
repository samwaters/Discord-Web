import { all, put } from '@redux-saga/core/effects'

import { authSaga } from './auth.saga'
import { bootstrap, ready } from '../actions/bootstrap.actions'
import { bootstrapSaga } from './bootstrap.saga'
import { configSaga } from './config.saga'
import { dashboardSaga } from './dashboard.saga'
import { userSaga } from './user.saga'

function * rootSaga() {
  yield all([
    authSaga(),
    bootstrapSaga(),
    configSaga(),
    dashboardSaga(),
    userSaga(),
    put(bootstrap()),
    put(ready())
  ])
}

export { rootSaga }
