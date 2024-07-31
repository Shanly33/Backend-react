import React, { useState } from 'react'
import { Tag, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { closeTag, setCurrentMenu } from '../../store/reducers/tab'
import './index.css'

const MyTag = props => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const tagList = useSelector(state => state.tab.tagList)
  const currentMenu = useSelector(state => state.tab.currentMenu)
  const location = useLocation()

  const handleCloseTag = (tag, index) => {
    let length = tagList.length - 1
    dispatch(closeTag(tag))
    if (index === length) {
      //设置当前数据
      const curData = tagList[index - 1]
      dispatch(setCurrentMenu(curData))
      navigate(curData.path)
    } else {
      //关闭中间tag
      if (tagList.length > 1) {
        //如果tag至少存在一个数据，则选择后一个
        const curData = tagList[index + 1]
        dispatch(setCurrentMenu(curData))
        navigate(curData.path)
      }
    }
  }

  const handleClickTag = tag => {
    dispatch(setCurrentMenu(tag))
    navigate(tag.path)
  }

  //tag的显示,flag为是否选中标识
  const setTag = (flag, item, index) => {
    return flag ? (
      <Tag closeIcon onClose={() => handleCloseTag(item, index)} color='#55acee' key={item.name}>
        {item.label}
      </Tag>
    ) : (
      <Tag key={item.name} onClick={() => handleClickTag(item)}>
        {item.label}
      </Tag>
    )
  }
  return (
    <Space className='tag-box' size={[0, 8]} wrap>
      {currentMenu.name &&
        tagList.map((item, index) => setTag(item.path === currentMenu.path, item, index))}
    </Space>
  )
}
export default MyTag
