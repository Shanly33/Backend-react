import { post } from '../../utils/request'

export const LoginApi = async data => {
  return post('/permission/LoginApi', data)
}
