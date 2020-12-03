<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <!-- 具名插槽 -->
      <template v-slot:item-icon>
        <span class="iconfont item-icon">&#xe733;</span>
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
      <!-- <span slot="item-icon-active" class="iconfont item-icon active">&#xe733;</span> -->
    </tab-bar-item>

    <tab-bar-item path="/cart" activeColor="red">
      <template v-slot:item-icon>
        <span class="iconfont item-icon">&#xe733;</span>
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
      <!-- <span slot="item-icon" class="iconfont item-icon">&#xe733;</span>
      <div slot="item-text">购物车</div>-->
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <template v-slot:item-icon>
        <span class="iconfont item-icon">&#xe733;</span>
      </template>
      <template v-slot:item-text>
        <div>类别</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <!-- 具名插槽 -->
      <template v-slot:item-icon>
        <span class="iconfont item-icon">&#xe733;</span>
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common//tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>