<template>
  <div>
    <swiper class="swiperItemImg">
      <swiper-item v-for="item in swiperImgs" :key="item">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    swiperImgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style scoped>
.swiperItemImg {
  height: 300px;
  overflow: hidden;
}
</style>