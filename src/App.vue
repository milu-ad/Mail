<template>
  <div id="app">
    <div id="nav">
    <router-view />

      <main-tab-bar/>
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link> -->
    </div>
  </div>
</template>

<script>
import MianTabBar from "components/content/mainTabBar/MainTabBar";

export default {
  name:'App',
  components:{
        MianTabBar,
  }
}
</script>
<style>
@import "assets/css/reset.css";
</style>
