<template>
  <div id="app">
    <div id="nav">
      <!-- <keep-alive>
        <router-view />
      </keep-alive>-->
      <router-view v-slot="{ Component }">
        <keep-alive include="Home,Category,Profile,Cart" exclude="Detail">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <main-tab-bar />
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
    </div>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>
<style>
@import "assets/css/reset.css";
</style>
