<template>
  <div>
    <h2>类别</h2>
    <div class="wrapper" ref="wrapper">
      <ul class="content" ref="content">
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
        <li>23131</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true,
      click: true
    });
    // 默认情况下不会实时监听滚动位置，probe侦测，probeType
    // 0/1均不实时监听
    // 2：手指滚动过程中监听，手指离开后的惯性过程不会监听
    // 3：只要是滚动就监听
    this.scroll.on("scroll", position => {
      // console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载");
      // this.scroll.finishPullUp();
    });
  }
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: pink;
  /* overflow-y: scroll; */
}
</style>