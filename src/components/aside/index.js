import React, { useState } from 'react'
import * as Icon from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import menuList from '../../config'

const { Sider } = Layout

const Aside = props => {
  const { collapsed } = props

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

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <h3 className='app-name'>通用后台管理系统</h3>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        items={getItems(menuList)}
        style={{
          height: '100%'
        }}
      />
    </Sider>
  )
}
export default Aside
