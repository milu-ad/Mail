import axios from 'axios'

export function request(config) {
  const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })
  instance1.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  // 发送网络请求
  return instance1(config)
  // instance1(baseConfig)
  //   .then(res=>{
  //       // console.log(res);
  //       config.success(res)
  //   })
  //   .catch(err=>{
  //       // console.log(err);
  //       config.falure(err)
  //   })
}