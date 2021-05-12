import {request} from "./request.js"

export function getdetails(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods{
  constructor(skuInfo,itemInfo,columns,services) {
      this.title=skuInfo.title
      this.oldPrice=itemInfo.oldPrice
      this.price=itemInfo.price
      this.discountDesc=itemInfo.discountDesc
      this.discountBgColor=itemInfo.discountBgColor
      this.columns=columns
      this.services=services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
