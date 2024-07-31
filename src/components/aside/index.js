import React, { useState } from 'react'
import * as Icon from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import menuList from '../../config'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectTagList } from '../../store/reducers/tab'

const { Sider } = Layout

const Aside = props => {
  const { collapsed, Collapsed } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //添加数据到store
  const setTagList = val => {
    dispatch(selectTagList(val))
  }

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
    let data
    menuList.forEach(item => {
      if (item.path === e.keyPath[e.keyPath.length - 1]) {
        data = item
        //如果有二级菜单
        if (e.keyPath.length > 1) {
          data = item.children.find(child => {
            return child.path === e.key
          })
        }
      }
    })
    setTagList({
      path: data.path,
      name: data.name,
      label: data.label
    })
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
