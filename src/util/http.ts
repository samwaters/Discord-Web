import axios from 'axios'
import { store } from '../index'

export const authenticatedGet = async (path: string) => {
  const state = store.getState()
  const response = await axios.get(path, {
    headers: {
      Authorization: 'Bearer ' + state.auth.accessToken,
      'X-Token': state.auth.state,
      'X-User': state.user.id
    }
  })
  if (response.status !== 200) throw new Error(response.data)
  return response.data
}

export const authenticatedPost = async (path: string, data: any) => {
  const state = store.getState()
  const response = await axios.post(path, data, {
    headers: {
      Authorization: 'Bearer ' + state.auth.accessToken,
      'Content-Type': 'application/json',
      'X-Token': state.auth.state,
      'X-User': state.user.id
    }
  })
  if (response.status !== 200) throw new Error(response.data)
  return response.data
}

export const post = async (path: string, data) => {
  const response = await axios.post(path, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.status !== 200) throw new Error(response.data)
  return response.data
}
