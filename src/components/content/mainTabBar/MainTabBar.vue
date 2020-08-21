<template>
      <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <!-- 具名插槽 -->
        <span slot="item-icon" class="iconfont item-icon" >&#xe733;</span>
        <!-- <span slot="item-icon-active" class="iconfont item-icon active">&#xe733;</span> -->
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
         <span slot="item-icon" class="iconfont item-icon" >&#xe733;</span>
        <!-- <span slot="item-icon-active" class="iconfont item-icon active">&#xe733;</span> -->
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item></tab-bar-item>
      <tab-bar-item></tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common//tabbar/TabBarItem";

export default {
  name:'MainTabBar',
  components:{
        TabBar,
    TabBarItem,
  }
}
</script>

<style>

</style>