import React, { useState } from 'react'
import * as Icon from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import menuList from '../../config'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

const Aside = props => {
  const { collapsed, Collapsed } = props
  const navigate = useNavigate()

  //动态获取icon
  const iconToElement = name => React.createElement(Icon[name])

  //菜单数据处理
  const getItems = (items, list = []) => {
    items.map(item => {
      return list.push({
        key: item.path,
        ...(item.icon ? { icon: iconToElement(item?.icon) } : []),
        label: item.label,
        ...(item.children ? { children: getItems(item.children) } : [])
      })
    })
    return list
  }

  const clickMenu = e => {
    navigate(e.key)
  }

  return (
    <Sider trigger={null} collapsible collapsed={Collapsed}>
      <h3 className='app-name'>{Collapsed ? '后台' : '通用后台管理系统'}</h3>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        items={getItems(menuList)}
        style={{
          height: '100%'
        }}
        onClick={clickMenu}
      />
    </Sider>
  )
}
export default Aside
