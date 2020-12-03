<template>
  <div id="home">
    <!-- -------导航--------- -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>首页</div>
      </template>
    </nav-bar>
    <tab-control
      ref="tabControl2"
      :titles="['不闻','不言','不思']"
      @tabClick="tabClick"
      class="tab-control-invis"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @curPosition="curPosition"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 首页轮播图 -->
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature />
      <tab-control
        ref="tabControl1"
        class="tab-control"
        :titles="['不闻','不言','不思']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @backClick="backTop" :class="{fiexed:isTabFixed}" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/Homefeature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultiData, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeature,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      keywords: [],
      dkeyword: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultiData();
    // 2. 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    //   监听item中图片加载完成
    this.$mitt.on("itemImgLoad", () => {
      // console.log(1212131);
      // 这里可能出现scroll中还未完成挂在时被调用，结果为空的错误
      // 解决方案为在函数定义的位置先做判断，看scroll对象是否被创建成功
      // this.$refs.scroll.refresh();
      refresh();
    });
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
    // console.log(this.$refs.scroll.scroll.y);
  },
  methods: {
    // 事件监听相关方法
    swiperImgLoad() {
      // 2. 获取tabControl的offsetTop
      // 所有组件都有一个属性$el, 用于获取组件中的dom元素
      // this.tabOffsetTop = this.$refs.tabControl.$el

      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop;
      // console.log(this.$refs.tabControl.$el.offsetTop);
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },
    backTop() {
      // 取出scroll这个组件对象 this.$refs.scroll
      // 再取出对象中对应属性/方法
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500);
      this.$refs.scroll.scrollTo(0, 0, 500);
      console.log("返回顶部");
    },
    curPosition(position) {
      // 1.判断backTop是否显示
      this.isShowBackTop = -position.y > 1000;

      // 2.判断tabcontrol的位置,是否吸顶(position:fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      console.log("上拉加载");
      // 在图片加载完后重新刷新，确定可滚动区域的实际大小
      // this.$refs.scroll.refresh();
    },

    // 网络请求相关方法
    getHomeMultiData() {
      // 1.请求多个数据，数据在组件创建时就需要获取到
      // 通过.then()方法获取,异步操作
      getHomeMultiData().then(
        res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          //执行完后所有的变量会被释放，因此获取后需将数组保存至data中
        },
        err => {
          console.log(err);
        }
      );
      // 此处直接打印不会返回结果，因为获取数据的函数是异步函数，执行打印语句时函数可能还未执行完
      // console.log(this.result);
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        //箭头函数，此处的this为当前组件对象
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(res);
        //完成上拉加载更多
        this.$refs.scroll.finishPullUps();
      });
    }
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  /* padding-bottom: 49px; */
  position: relative;
  /* height: 100vh; */
}
.home-nav {
  background-color: #ff8198;
  color: #eee;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  /* height: calc(100% - 93px);
  margin-top: 44px; */
  /* overflow: hidden; */
  height: 475px;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.tab-control-invis {
  position: relative;
  top: 44px;
  z-index: 9;
}
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
} */
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
</style>