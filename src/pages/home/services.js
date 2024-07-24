import { get, post } from '../../utils/request'

export const getData = async () => {
  return get('/home/getData')
}
