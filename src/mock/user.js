import { message } from 'antd'
import Mock from 'mockjs'

function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
      '"}'
  )
}

let List = []
const count = 200

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: Mock.Random.guid(),
      name: Mock.Random.cname(),
      addr: Mock.mock('@county(true)'),
      'age|18-60': 1,
      birth: Mock.Random.date(),
      sex: Mock.Random.integer(0, 1)
    })
  )
}

const userApi = {
  /**
   * 获取列表
   * 参数 name,page,limit;name可以不填，page,limit有默认值。
   * @param name
   * @param page
   * @param limit
   * @return {{code:number,count:number,data:*[]}}
   */
  getUserList: config => {
    const { name, page = 1, limit = 20 } = param2Obj(config.url)
    const mockList = List.filter(user => {
      if (name && user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1) return false
      return true
    })
    const pageList = mockList.filter(
      (item, index) => index < limit * page && index >= limit * (page - 1)
    )
    return {
      code: 200,
      count: mockList.length,
      list: pageList
    }
  },
  /**
   * 增加用户
   * @param name
   * @param addr
   * @param age
   * @param birth
   * @param sex
   * @return {{code:number,data:{message:string}}}
   */
  createUser: config => {
    const { name, addr, age, birth, sex } = JSON.parse(config.body)
    List.unshift({
      id: Mock.Random.guid(),
      name: name,
      age: age,
      addr: addr,
      birth: birth,
      sex: sex
    })
    return {
      code: 200,
      data: {
        message: '添加成功'
      }
    }
  },
  /**
   * 编辑用户
   * @param name
   * @param addr
   * @param age
   * @param birth
   * @param sex
   * @return {{code:number,data:{message:string}}}
   */
  updateUser: config => {
    const { id, name, addr, age, birth, sex } = JSON.parse(config.body)
    const sex_num = parseInt(sex)
    List.some(item => {
      if (item.id === id) {
        item.name = name
        item.age = age
        item.addr = addr
        item.birth = birth
        item.sex = sex_num
        return true
      }
    })
    return {
      code: 200,
      data: {
        message: '编辑成功'
      }
    }
  },
  /**
   * 删除用户
   * @param id
   * @return {*}
   */
  deleteUser: config => {
    const { id } = JSON.parse(config.body)
    if (!id) {
      return {
        code: 400,
        message: '删除失败'
      }
    } else {
      List = List.filter(item => item.id !== id)
      return {
        code: 200,
        message: '删除成功'
      }
    }
  }
}
export default userApi
