import { get, post } from '../../utils/request'

export const getUser = async params => {
  return get('/user/getUser', params)
}

export const createUser = async data => {
  return post('/user/createUser', data)
}

export const updateUser = async data => {
  return post('/user/updateUser', data)
}

export const deleteUser = async data => {
  return post('/user/deleteUser', data)
}
