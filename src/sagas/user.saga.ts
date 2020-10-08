import { call, put, select, takeEvery } from '@redux-saga/core/effects'
import { dashboardLoad } from '../actions/dashboard.actions'
import { SELECT_GUILD, selectGuildFailed, selectGuildSuccess } from '../actions/user.actions'
import { AppState } from '../reducers'
import { authenticatedPost } from '../util/http'

function * selectGuild(action) {
  try {
    const config = yield select((state: AppState) => state.config)
    const details = yield call(
      authenticatedPost,
      `${config.apiUrl}/api/guild/select`,
      { guild: action.payload }
    )
    yield put(selectGuildSuccess(details.guild))
    yield put(dashboardLoad())
  } catch {
    yield put(selectGuildFailed())
  }
}

export function * userSaga() {
  yield takeEvery(SELECT_GUILD, selectGuild)
}
