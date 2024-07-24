import React, { useEffect, useState } from 'react'
import { getData } from './services'
import { Col, Row, Card, Space, Table, Tag } from 'antd'
import './index.css'
import * as Icon from '@ant-design/icons'

const Home = () => {
  const [homeData, setHomeData] = useState({})
  const [tableData, setTableData] = useState([])
  const [countData, setCountData] = useState([])
  useEffect(() => {
    getData().then(res => {
      console.log(res.data.data)
      setTableData(res.data.data.tableData)
      setCountData(res.data.data.countData)
    })
  }, [])

  //动态获取icon
  const iconToElement = name => React.createElement(Icon[name])

  const columns = [
    {
      title: '课程',
      dataIndex: 'name',
      key: 'name'
      // render: text => <a>{text}</a>
    },
    {
      title: '今日购买',
      dataIndex: 'todayBuy',
      key: 'todayBuy'
    },
    {
      title: '本月购买',
      dataIndex: 'monthBuy',
      key: 'monthBuy'
    },
    {
      title: '总购买',
      key: 'totalBuy',
      dataIndex: 'totalBuy'
    }
  ]
  return (
    <Row className='home' gutter={20}>
      <Col span={8}>
        <Card hoverable>
          <div className='user'>
            <img src={require('../../assets/images/avatar.jpg')}></img>
            <div className='userInfo'>
              <p className='name'>Admin</p>
              <p className='role'>超级管理员</p>
            </div>
          </div>
          <div className='login-info'>
            <p>
              上次登录时间：
              <span>2024-07-17</span>
            </p>
            <p>
              上次登录地点：
              <span>成都</span>
            </p>
          </div>
        </Card>
        <Card hoverable className='table'>
          <Table columns={columns} dataSource={tableData} pagination={false} rowKey={'name'} />
        </Card>
      </Col>
      <Col span={16}>
        <div className='num'>
          {countData.map((item, index) => {
            return (
              <Card key={index}>
                <div className='icon' style={{ backgroundColor: item.color }}>
                  {iconToElement(item.icon)}
                </div>
                <div className='desc'>
                  <p className='value'>￥{item.value}</p>
                  <p className='name'>{item.name}</p>
                </div>
              </Card>
            )
          })}
        </div>
        <div></div>
        <div></div>
      </Col>
    </Row>
  )
}
export default Home
