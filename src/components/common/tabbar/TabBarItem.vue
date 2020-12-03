<template>
  <!-- <div class="tab-bar-item" :class="{active:isActive}" @click="itemCLick"> -->
  <div class="tab-bar-item" @click="itemCLick" :style="activeStyle">
    <!-- 动态决定item中的两个元素内容 -->
    <slot name="item-icon"></slot>
    <!-- <slot v-else name="item-icon-active"></slot> -->
    <slot name="item-text"></slot>
    <!-- <span class="iconfont item-icon">&#xe733;</span>
    <div>首页</div>-->
  </div>
  <!-- <div class="tab-bar-item active">
      <span class="iconfont item-icon">&#xe601;</span>
      <div>首页</div>
    </div>
    <div class="tab-bar-item active">
      <span class="iconfont item-icon">&#xe6bd;</span>
      <div>首页</div>
    </div>
    <div class="tab-bar-item active">
      <span class="iconfont item-icon">&#x35ba;</span>
      <div>首页</div>
  </div>-->
  <!-- <span class="iconfont tab-bar-item">&#xe601;</span>
      <span class="iconfont tab-bar-item">&#xe6bd;</span>
  <span class="iconfont tab-bar-item">&#x35ba;</span>-->
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#f40"
    }
  },
  data() {
    return {
      // isActive:true
    };
  },
  computed: {
    isActive() {
      //判断当前路径中是否有这个path
      //indexOf  若左边未找到path则恒等于-1
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemCLick() {
      this.$router.push(this.path);
      console.log(777);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  /* 均等划分 */
  text-align: center;
  height: 49px;
  /* line-height: 49px; */
  /* position: relative;
  top: -35px; */
  font-size: 14px;
}
.item-icon {
  position: relative;
  top: 3px;
}
/* .active {
  color: #f40;
} */
</style>