<template>
  <div>
    <div class="detail-shop-info" v-if="Object.keys(shop).length!==0">
      <div class="shop-name">
        <img :src="shop.shopLogo" alt />
        <div>{{shop.name}}</div>
      </div>
      <div class="relative-info">
        <div class="leftInfo">
          <div>
            <p class="num16">{{showNum}}</p>
            <p>总销量</p>
          </div>
          <div>
            <p class="num16">{{shop.cGoods}}</p>
            <p>全部宝贝</p>
          </div>
        </div>
        <div class="rightInfo">
          <div v-for="item in shop.score" :key="item">
            {{item.name}}
            <span class="score" :class="{active:item.isBetter}">{{item.score}}</span>
            <span class="score-bg" :class="{bgactive:item.isBetter}">{{item.isBetter?'高':'低'}}</span>
          </div>
        </div>
      </div>
      <div class="enter-shop-wrap">
        <div class="enter-shop">进店逛逛</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showNum() {
      if (this.shop.cSells < 10000) return this.shop.cSells;
      return (this.shop.cSells / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped>
/* .detail-shop-info {
  margin: 20px 10px;
  align-items: center;
} */
.shop-name {
  margin: 20px 10px;
  align-items: center;
  display: flex;
}
.shop-name img {
  border-radius: 100%;
  height: 50px;
  width: 50px;
  margin-right: 10px;
  vertical-align: center;
}
.relative-info {
  display: flex;
  padding: 0 10px;
  font-size: 12px;
  line-height: 22px;
}
.num16 {
  font-size: 16px;
}
.leftInfo {
  align-items: center;
  display: flex;
  flex: 1;
  border-right: 1px solid #ececec;
}
.leftInfo div {
  flex: 1;
  text-align: center;
}
.rightInfo {
  font-size: 12px;
  padding-left: 34spx;
  padding-right: 10px;
}
.rightInfo .score {
  display: inline-block;
  width: 30px;
  color: #799b60;
  padding: 0 5px;
}
.rightInfo .active {
  color: #e0736a;
}
.rightInfo .score-bg {
  background-color: #799b60;
  color: #fff;
}
.rightInfo .bgactive {
  background-color: #e0736a;
}
.enter-shop-wrap {
  text-align: center;
}
.enter-shop {
  background-color: #f2f2f2;
  border-radius: 100px;
  display: inline-block;
  font-size: 12px;
  margin: 10px;
  padding: 6px 30px;
}
</style>