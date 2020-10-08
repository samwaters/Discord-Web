import { call, put, select, takeEvery } from '@redux-saga/core/effects'
import { DASHBOARD_LOAD, dashboardLoadFailure, dashboardLoadSuccess } from '../actions/dashboard.actions'
import { AppState } from '../reducers'
import { UserState } from '../reducers/user.reducer'
import { authenticatedPost } from '../util/http'

function * dashboardLoad() {
  try {
    const config = yield select((state: AppState) => state.config)
    const user: UserState = yield select((state: AppState) => state.user)
    const details = yield call(
      authenticatedPost,
      `${config.apiUrl}/api/guild`,
      {
        guild: user.lastSelectedGuildId
      }
    )
    yield put(dashboardLoadSuccess(details))
  } catch {
    yield put(dashboardLoadFailure())
  }
}

export function * dashboardSaga() {
  yield takeEvery(DASHBOARD_LOAD, dashboardLoad)
}
