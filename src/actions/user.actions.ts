import { UserState } from '../reducers/user.reducer'

export const SELECT_GUILD = 'SELECT_GUILD'
export const SELECT_GUILD_FAILED = 'SELECT_GUILD_FAILED'
export const SELECT_GUILD_SUCCESS = 'SELECT_GUILD_SUCCESS'
export const SET_USER = 'SET_USER'

export const selectGuild = (guild) => ({
  type: SELECT_GUILD,
  payload: guild
})

export const selectGuildFailed = () => ({
  type: SELECT_GUILD_FAILED
})

export const selectGuildSuccess = (guild) => ({
  type: SELECT_GUILD_SUCCESS,
  payload: guild
})

export const setUser = (user: UserState) => ({
  type: SET_USER,
  payload: user
})
