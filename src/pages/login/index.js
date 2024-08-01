import React from 'react'
import { Form, Input, Button } from 'antd'
import './index.css'

const Login = () => {
  const handleSubmit = () => {}
  return (
    <Form className='login-box' onFinish={handleSubmit}>
      <div className='title'>系统登录</div>
      <Form.Item
        label='账号'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder='请输入账号' />
      </Form.Item>

      <Form.Item
        label='密码'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
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
