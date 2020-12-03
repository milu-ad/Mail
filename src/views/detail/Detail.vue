<template>
  <div id="detail">
    <!-- 导航 -->
    <detail-navBar class="detail-nav" />
    <scroll class="content" ref="scroll" :probe-type="3">
      <detail-swiper :swiperImgs="swiperImgs" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :paramInfo="paramInfo" />
      <detail-comment-info :commentInfo="commentInfo" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, GoodsInfo, Shop, Param } from "network/detail";
import { debounce } from "common/utils";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      swiperImgs: [],
      goods: {},
      shop: {},
      paramInfo: {},
      detailInfo: {},
      commentInfo: {},
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 500);
    // //   监听item中图片加载完成
    // this.$mitt.on("detailImgLoad", () => {
    //   console.log(1212131);
    //   // 这里可能出现scroll中还未完成挂在时被调用，结果为空的错误
    //   // 解决方案为在函数定义的位置先做判断，看scroll对象是否被创建成功
    //   // this.$refs.scroll.refresh();
    //   refresh();
    // });
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.id;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      // 1.取出数据
      const data = res.result;

      // 2。轮播图数据
      this.swiperImgs = data.itemInfo.topImages;

      // 3. 创建商品对象
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo);
      // console.log(this.goods);

      // 4. 店铺信息
      this.shop = new Shop(data.shopInfo);
      // console.log(this.shop);

      // 5. 详情信息
      this.detailInfo = data.detailInfo;
      // console.log(this.detailInfo);

      // 6. 参数信息
      this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule);
      // console.log(this.paramInfo);

      // 7. 评论
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
        console.log(this.commentInfo);
        console.log(this.commentInfo.user.avatar);
      }
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>

<style scoped>
#detail {
  /* position: relative; */
  /* z-index: 12; */
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 12;

  background-color: #fff;
}
.content {
  height: calc(100% - 93px);
  /* position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px; */
}
</style>