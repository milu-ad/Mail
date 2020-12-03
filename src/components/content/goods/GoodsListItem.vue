<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" @load="imgLoad" />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
    imgLoad() {
      this.$mitt.emit("itemImgLoad");

      // this.$bus.$emit("itemImgLoad");
      console.log("加载完成一张图片后发送事件");
    }
  }
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  /* 省略号 */
  white-space: nowrap;
  /* 强制在同一行显示 */
  margin-bottom: 3px;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.collect {
  position: relative;
}
.collect::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -15px;
  width: 14px;
  height: 14px;
  /* background: url("~assets/images/common/collect.svg") 0 0/14px 14px; */
}
</style>