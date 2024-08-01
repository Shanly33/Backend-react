import React from 'react'
import { Form, Input, Button, message } from 'antd'
import './index.css'
import { LoginApi } from './services'
import { useNavigate, Navigate } from 'react-router-dom'

const Login = () => {
  const navigator = useNavigate()
  //在登陆状态下，需要跳转到home页面
  if (localStorage.getItem('token')) {
    return <Navigate to='/home' />
  }
  const handleSubmit = val => {
    if (!val.password || !val.username) {
      message.warning('请输入用户名和密码')
    }
    LoginApi(val).then(res => {
      const { data } = res
      localStorage.setItem('token', data.data.token)
      navigator('/home')
    })
  }
  return (
    <Form className='login-box' onFinish={handleSubmit}>
      <div className='title'>系统登录</div>
      <Form.Item label='账号' name='username'>
        <Input placeholder='请输入账号' />
      </Form.Item>

      <Form.Item label='密码' name='password'>
        <Input.Password placeholder='请输入密码' />
      </Form.Item>
      <Form.Item className='login-button'>
        <Button type='primary' htmlType='submit'>
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}
export default Login
