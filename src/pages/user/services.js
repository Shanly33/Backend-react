import { get, post } from '../../utils/request'

export const getUser = async params => {
  return get('/user/getUser', params)
}
