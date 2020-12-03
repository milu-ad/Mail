<template>
  <div>
    <div v-if="Object.keys(goods).length!==0">
      <div class="title">{{goods.title}}</div>
      <div class="price-box">
        <div class="price-now">{{goods.lowNowPrice}}</div>
        <div class="price-old">{{goods.oldPrice}}</div>
        <div class="discount" v-if="goods.discountDesc">{{goods.discountDesc}}</div>
      </div>
      <div class="relative-info">
        <div>{{goods.columns[0]}}</div>
        <div>{{goods.columns[1]}}</div>
        <div>{{goods.services[goods.services.length-1].name}}</div>
      </div>
      <div class="service-info">
        <!-- v-for(n in 10) 最后取出的数字是1-10-->
        <div v-for="index in goods.services.length-1" :key="index">
          <img :src="goods.services[index-1].icon" alt />
          {{goods.services[index-1].name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style  scoped>
.title {
  font-size: 14px;
  line-height: 20px;
  margin: 5px 0;
  padding: 0 4px;
}
.price-box {
  display: flex;
  padding: 0 4px 10px;
}

.price-box .price-now {
  color: var(--color-high-text);
}
.price-box .price-old {
  padding-left: 8px;
  color: #999;
  font-size: 12px;
  margin-right: 4px;
  /* line-height: 1.5; */
  text-decoration: line-through;
}
.price-box .discount {
  background-color: var(--color-high-text);
  border-radius: 5px;
  color: #fff;
  padding: 2px 6px;

  font-size: 12px;
  /* line-height: 1.5; */
}
.relative-info {
  display: flex;
  color: #999;
  font-size: 12px;
  border-bottom: 1px solid #ededed;
  border-top: 1px solid #ededed;
  padding: 10px 5px;
}

.relative-info div {
  flex: 1;
}
.relative-info div:last-child {
  text-align: right;
}
.relative-info div:nth-child(2) {
  text-align: center;
}
.service-info {
  display: flex;
  color: #333;
  font-size: 12px;
  justify-content: space-between;
  padding: 10px 5px;
  border-bottom: 4px solid #ededed;
}
.service-info img {
  padding-bottom: 3px;
  vertical-align: middle;
  width: 12px;
  height: 12px;
}
</style>