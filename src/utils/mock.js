import Mock from 'mockjs'
import homeApi from '../mock/home'
import userApi from '../mock/user'

//拦截接口
Mock.mock(/home\/getData/, homeApi)
Mock.mock(/user\/getUser/, userApi.getUserList)
