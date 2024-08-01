import Mock from 'mockjs'
import homeApi from '../mock/home'
import userApi from '../mock/user'
import PermissionApi from '../mock/permission'

//拦截接口
Mock.mock(/home\/getData/, homeApi)
Mock.mock(/user\/getUser/, userApi.getUserList)
Mock.mock(/user\/createUser/, 'post', userApi.createUser)
Mock.mock(/user\/updateUser/, 'post', userApi.updateUser)
Mock.mock(/user\/deleteUser/, 'post', userApi.deleteUser)
Mock.mock(/permission\/LoginApi/, 'post', PermissionApi.LoginApi)
