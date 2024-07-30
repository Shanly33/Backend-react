import Mock from 'mockjs'

//图表数据
let List = []
for (let i = 0; i < 7; i++) {
  List.push(
    Mock.mock({
      苹果: Mock.Random.float(100, 8000, 0, 0),
      vivo: Mock.Random.float(100, 8000, 0, 0),
      oppo: Mock.Random.float(100, 8000, 0, 0),
      魅族: Mock.Random.float(100, 8000, 0, 0),
      三星: Mock.Random.float(100, 8000, 0, 0),
      小米: Mock.Random.float(100, 8000, 0, 0)
    })
  )
}

const homeApi = {
  code: 200,
  data: {
    //饼图
    videoData: [
      {
        name: '小米',
        value: 2999
      },
      {
        name: '苹果',
        value: 5999
      },
      {
        name: 'vivo',
        value: 1500
      },
      {
        name: 'oppo',
        value: 1999
      },
      {
        name: '魅族',
        value: 2200
      },
      {
        name: '三星',
        value: 4500
      }
    ],
    //柱状图
    userData: [
      {
        date: '周一',
        new: 5,
        active: 200
      },
      {
        date: '周二',
        new: 10,
        active: 500
      },
      {
        date: '周三',
        new: 12,
        active: 550
      },
      {
        date: '周四',
        new: 60,
        active: 800
      },
      {
        date: '周五',
        new: 65,
        active: 550
      },
      {
        date: '周六',
        new: 53,
        active: 770
      },
      {
        date: '周日',
        new: 33,
        active: 170
      }
    ],
    //折线图
    orderData: {
      date: ['20241001', '20241002', '20241003', '20241004', '20241005', '20241006', '20241007'],
      data: List
    },
    tableData: [
      {
        name: 'oppo',
        todayBuy: 500,
        monthBuy: 3500,
        totalBuy: 22000
      },
      {
        name: 'vivo',
        todayBuy: 300,
        monthBuy: 2200,
        totalBuy: 24000
      },
      {
        name: '苹果',
        todayBuy: 800,
        monthBuy: 4500,
        totalBuy: 65000
      },
      {
        name: '小米',
        todayBuy: 1200,
        monthBuy: 6500,
        totalBuy: 45000
      },
      {
        name: '三星',
        todayBuy: 300,
        monthBuy: 2000,
        totalBuy: 34000
      },
      {
        name: '魅族',
        todayBuy: 350,
        monthBuy: 3000,
        totalBuy: 22000
      }
    ],
    //统计数据
    countData: [
      {
        name: '今日支付订单',
        value: 1234,
        icon: 'PayCircleOutlined',
        color: '#33d294'
      },
      {
        name: '今日收藏订单',
        value: 4545,
        icon: 'HeartOutlined',
        color: '#ff6a4d'
      },
      {
        name: '今日未支付订单',
        value: 1234,
        icon: 'CloseCircleOutlined',
        color: '#5ab1ef'
      },
      {
        name: '本月支付订单',
        value: 1234,
        icon: 'PayCircleOutlined',
        color: '#33d294'
      },
      {
        name: '本月收藏订单',
        value: 666,
        icon: 'HeartOutlined',
        color: '#ff6a4d'
      },
      {
        name: '本月未支付订单',
        value: 3423,
        icon: 'CloseCircleOutlined',
        color: '#5ab1ef'
      }
    ]
  }
}

export default homeApi
