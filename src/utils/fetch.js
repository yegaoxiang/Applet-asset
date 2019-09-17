import wepy from 'wepy'

const BASE_URL = 'http://172.16.63.38:12000/user-server'

// 封装 wepy.request() ，简化发送请求的方式
const fetch = (config = {}) => {
  return wepy
    .request({
      url: BASE_URL + (config.url || ''),
      method: config.method || 'GET',
      data: config.data || {},
      header: config.header || {}
    })
    .then(res => {
      // console.log(res);
      return res.data
    })
}

/*
  调用方式：

  fetch({
    url: '',
    method: '',
    data: {}
  }).then(res => {})
*/

export default fetch
