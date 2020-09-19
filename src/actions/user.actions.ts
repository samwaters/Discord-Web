import { UserState } from '../reducers/user.reducer'

export const SET_USER = 'SET_USER'
export const setUser = (user: UserState) => ({
  type: SET_USER,
  payload: user
})
