import React, { useEffect, useState } from 'react'
import {
  Button,
  Form,
  Input,
  Table,
  Space,
  Popconfirm,
  Modal,
  InputNumber,
  Select,
  DatePicker,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import './index.css'
import { getUser, createUser, updateUser, deleteUser } from './services'
import dayjs from 'dayjs'

const User = () => {
  const [filterParam, setFilterParam] = useState({
    name: ''
  })
  const [tableData, setTableData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [method, setMethod] = useState('add')
  const [form] = Form.useForm()

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      render: val => {
        return val ? '女' : '男'
      }
    },
    {
      title: '出生日期',
      dataIndex: 'birth',
      key: 'birth'
    },
    {
      title: '地址',
      dataIndex: 'addr',
      key: 'addr'
    },
    {
      title: '操作',
      key: 'x',
      render: (text, record) => {
        return (
          <Space>
            <Button onClick={() => handleModal('edit', text)}>编辑</Button>
            <Popconfirm
              title='提示'
              description='此操作将删除该用户,是否继续?'
              onConfirm={() => handleDelete(text)}
              onCancel={handleCancel}
              okText='确认'
              cancelText='取消'
            >
              <Button type='primary' danger>
                删除
              </Button>
            </Popconfirm>
          </Space>
        )
      }
    }
  ]

  const handleCancel = () => {
    setIsModalOpen(false)
    form.resetFields()
  }

  const handleDelete = data => {
    const { id } = data
    deleteUser({ id }).then(res => {
      console.log(res.data)
      if (res.data.code === 200) {
        getTableList()
        message.success(res.data.message)
      } else {
        message.error(res.data.message)
      }
    })
  }

  const getTableList = () => {
    getUser(filterParam).then(res => {
      setTableData(res.data.list)
    })
  }

  useEffect(() => {
    getTableList()
  }, [])

  useEffect(() => {
    getTableList()
  }, [filterParam])

  const handleModal = (method, data) => {
    if (method === 'edit') {
      const cloneData = JSON.parse(JSON.stringify(data))
      cloneData.birth = dayjs(cloneData.birth)
      form.setFieldsValue(cloneData)
    }
    setMethod(method)
    setIsModalOpen(true)
  }

  const handleSubmit = () => {
    form
      .validateFields()
      .then(value => {
        value.birth = dayjs(value.birth).format('YYYY-MM-DD')
        if (method === 'edit') {
          updateUser(value).then(res => {
            handleCancel()
            getTableList()
            message.success(res.data.data.message)
          })
        } else {
          createUser(value).then(res => {
            handleCancel()
            getTableList()
            message.success(res.data.data.message)
          })
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  const onFinish = e => {
    setFilterParam({
      name: e.keyword
    })
  }
  return (
    <div className='user-list'>
      <div className='filter-box'>
        <Button type='primary' onClick={() => handleModal('add')} icon={<PlusOutlined />}>
          新建
        </Button>
        <Form name='basic' layout='inline' onFinish={onFinish} autoComplete='off'>
          <Form.Item name='keyword'>
            <Input placeholder='请输入用户名' />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Table columns={columns} dataSource={tableData} rowKey={'id'}></Table>
      <Modal
        title={method === 'edit' ? '编辑用户' : '新增用户'}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
        okText='确定'
        cancelText='取消'
      >
        <Form
          form={form}
          labelCol={{
            span: 6
          }}
          wrapperCol={{
            span: 18
          }}
          labelAlign='left'
        >
          {method === 'edit' && (
            <Form.Item name='id' hidden>
              <Input />
            </Form.Item>
          )}
          <Form.Item
            label='姓名'
            name='name'
            rules={[
              {
                required: true,
                message: '请输入姓名!'
              }
            ]}
          >
            <Input placeholder='请输入姓名' />
          </Form.Item>

          <Form.Item
            label='年龄'
            name='age'
            rules={[
              {
                required: true,
                message: '请输入年龄!'
              }
            ]}
          >
            <InputNumber placeholder='请输入年龄' />
          </Form.Item>

          <Form.Item
            label='性别'
            name='sex'
            rules={[
              {
                required: true,
                message: '请选择性别!'
              }
            ]}
          >
            <Select
              placeholder='请选择性别'
              options={[
                { value: 0, label: '男' },
                { value: 1, label: '女' }
              ]}
            />
          </Form.Item>

          <Form.Item
            label='出生日期'
            name='birth'
            rules={[
              {
                required: true,
                message: '请选择出生日期!'
              }
            ]}
          >
            <DatePicker placeholder='请选择' format={'YYYY/MM/DD'} />
          </Form.Item>

          <Form.Item
            label='地址'
            name='addr'
            rules={[
              {
                required: true,
                message: '请填写地址!'
              }
            ]}
          >
            <Input placeholder='请填写地址' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
export default User
