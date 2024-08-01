import { message } from 'antd'
import Mock from 'mockjs'

const PermissionApi = {
  LoginApi: config => {
    const { username, password } = JSON.parse(config.body)
    //先判断用户是否存在
    //判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 'HomeOutlined',
              url: '/home/index'
            },
            {
              path: '/mail',
              name: 'mail',
              label: '商品管理',
              icon: 'ShopOutlined',
              url: '/mail/index'
            },
            {
              path: '/user',
              name: 'user',
              label: '用户管理',
              icon: 'UserOutlined',
              url: '/user/index'
            },
            {
              path: '/other',
              label: '其他',
              icon: 'SettingOutlined',
              children: [
                {
                  path: '/other/pageOne',
                  name: 'page1',
                  label: '页面1'
                },
                {
                  path: '/other/pageTwo',
                  name: 'page2',
                  label: '页面2'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: '登录成功'
        }
      }
    } else if (username === 'account' && password === 'account') {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 'HomeOutlined',
              url: '/home/index'
            },
            {
              path: '/mail',
              name: 'mail',
              label: '商品管理',
              icon: 'ShopOutlined',
              url: '/mail/index'
            }
          ],
          token: Mock.Random.guid(),
          message: '登录成功'
        }
      }
    } else {
      return {
        code: 400,
        message: '登录失败'
      }
    }
  }
}

export default PermissionApi
