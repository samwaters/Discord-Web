import axios from 'axios'
import { store } from '../index'

export const authenticatedGet = async (path: string) => {
  const state = store.getState()
  const response = await axios.get(path, {
    headers: {
      Authorization: 'Bearer ' + state.auth.accessToken
    }
  })
  if (response.status !== 200) throw new Error(response.data)
  return response.data
}

export const authenticatedPost = async () => {

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
