import React, { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, Avatar, Dropdown } from 'antd'
import './index.css'
import { useDispatch } from 'react-redux'
import { changeCollapse } from '../../store/reducers/tab'
import { useNavigate } from 'react-router-dom'

const { Header } = Layout

const MyHeader = props => {
  const { collapsed, setCollapsed, Collapsed } = props
  const dispatch = useDispatch()
  const navigat = useNavigate()

  //登出
  const logout = () => {
    //清除token
    localStorage.removeItem('token')
    navigat('/login')
  }

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
        <a target='_blank' onClick={() => logout()} rel='noopener noreferrer'>
          退出
        </a>
      )
    }
  ]

  const changeCollapsed = () => {
    dispatch(changeCollapse())
  }

  return (
    <Header className='header-container'>
      <Button
        type='text'
        icon={Collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        // onClick={() => setCollapsed(!collapsed)}
        onClick={changeCollapsed}
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
