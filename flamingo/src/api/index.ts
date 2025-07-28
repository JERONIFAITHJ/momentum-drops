import { apiRequest } from '../utils'

type AuthPayload = {
  username: string
  password: string
}

export const signUp = async (payload: AuthPayload) => {
  return apiRequest({
    url: '/auth/create-user',
    method: 'POST',
    data: payload,
  })
}

export const login = async (payload: AuthPayload) => {
  return apiRequest({
    url: '/auth/login',
    method: 'POST',
    data: payload,
  })
}
