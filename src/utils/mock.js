import Mock from 'mockjs'
import homeApi from '../mock/home'

//拦截接口
Mock.mock(/home\/getData/, homeApi)
