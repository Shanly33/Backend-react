import React, { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, Avatar, Dropdown } from 'antd'
import './index.css'

const { Header } = Layout

const MyHeader = props => {
  const { collapsed, setCollapsed } = props

  //登出
  const logout = () => {}

  const items = [
    {
      key: '1',
      label: (
        <a target='_blank' rel='noopener noreferrer'>
          个人中心
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a target='_blank' onClick={() => logout} rel='noopener noreferrer'>
          退出
        </a>
      )
    }
  ]

  return (
    <Header className='header-container'>
      <Button
        type='text'
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 32,
          backgroundColor: '#fff'
        }}
      />
      <Dropdown
        menu={{
          items
        }}
      >
        <Avatar src={<img src={require('../../assets/images/avatar.jpg')} />} />
      </Dropdown>
    </Header>
  )
}
export default MyHeader
