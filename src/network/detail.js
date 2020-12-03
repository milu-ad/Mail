import { request } from 'network/requests'
//统一管理首页的所有数据请求--封装


export function getDetail(iid) {
  return request({
    url: '/detail',
    params: { iid }
  }, res => {
    console.log(res);
  }, err => {
    console.log(err);
  })

}
export class GoodsInfo {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = shopInfo.services;
  }
}


//商铺信息
export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}

//参数信息
export class Param {
  constructor(info, rule) {
    this.info = info.set;
    this.rule = rule.tables;
  }
}
