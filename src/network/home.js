import {request} from 'network/requests'
//统一管理首页的所有数据请求--封装


export function getHomeMultiData(){
  return request({
    url:'/home/multidata'
  },res=>{
    console.log(res);
  },err=>{
    console.log(err);
  })
  
}

