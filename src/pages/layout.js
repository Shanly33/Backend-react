import React, { useState } from 'react'
import { Layout, theme } from 'antd'
import Aside from '../components/aside'
import MyHeader from '../components/header'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const { Content } = Layout

const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  //通过redux获取展开收起的状态
  const Collapsed = useSelector(state => state.tab.isCollapse)
  return (
    <Layout className='main-container'>
      <Aside collapsed={collapsed} Collapsed={Collapsed} />
      <Layout>
        <MyHeader collapsed={collapsed} Collapsed={Collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MyLayout
