<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.index" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  /* 子元素设置宽度后使用此属性 ，可以决定一行显示多少元素 */
  justify-content: space-evenly;
  /* 将子元素间的间距等分 */
}
</style>