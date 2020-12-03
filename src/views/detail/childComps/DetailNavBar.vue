<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div @click="backFn">
          <span class="iconfont">&#xe733;</span>
        </div>
      </template>
      <template v-slot:center>
        <div class="nav-content">
          <div
            v-for="(item,index) in title"
            :key="item.index"
            class="nav-center-item"
            @click="itemClick(index)"
            :class="{active: currentIndex==index}"
          >{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "detailNavBar",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  created() {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backFn() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.nav-content {
  display: flex;
  font-size: 14px;
}
.nav-center-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>