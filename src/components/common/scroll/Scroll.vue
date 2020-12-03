<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // console.log(this.$refs.wrapper);
    // 1.创建bscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 2.监听实时位置
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("curPosition", position);
      });
    }
    // 3.上拉加载 pullingUp
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log("上拉加载");
        this.$emit("pullingUp");
        // this.scroll.finishPullUps();
      });
    }

    console.log(this.scroll.scrollerHeight);
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUps() {
      console.log("stop pullingUp");
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      console.log("调用一次刷新函数");
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
</style>