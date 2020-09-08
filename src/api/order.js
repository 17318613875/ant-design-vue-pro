import request from '@/utils/request'

const api = {
  orderList: '/api/order/getCourseOrderList', // 查询教学端的用户订单信息
  orderInfo: '/api/order/getCutomerOrderInfo' // 查询客户的订单信息
}

export function GetOrderList () {
  return request({
    url: api.orderList,
    method: 'get'
  })
}

export function GetOrderInfo () {
  return request({
    url: api.orderInfo,
    method: 'get'
  })
}
