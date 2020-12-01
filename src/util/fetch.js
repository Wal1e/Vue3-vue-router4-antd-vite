import axios from 'axios'
import config from './config'

const httpFetch = axios.create(config);

httpFetch.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

httpFetch.interceptors.response.use(response => {
  // ie中res.data返回为string类型，chorme为obj类型
  if (response.data && typeof response.data == 'string') {
    response.data = JSON.parse(response.data)
  } 
  // 错误码处理
  if (response.data && response.data.error_no == 1001 || !response) {
  } else {
    return response
  }
}, error => {
  Promise.reject(error)
})

export default httpFetch