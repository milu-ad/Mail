<template>
  <div v-if="Object.keys(detailInfo).length!==0">
    <div class="info-text">
      <div class="text-top-style"></div>
      <div class="desc info-text-desc">{{detailInfo.desc}}</div>
      <div class="text-bot-style"></div>
    </div>
    <div class="img-list" v-for="item in detailInfo.detailImage" :key="item">
      <div class="desc">{{item.desc}}</div>
      <div v-for="(item,index) in item.list" :key="index">
        <img :src="item" alt class="img" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter: 0,
      imgaesLength: 0
    };
  },
  methods: {
    imgLoad() {
      // this.counter+=1
      // if this.counter==this.imgaesLength
      // 判断所有图片都加载完后，再进行一次回调即可
      if (++this.counter === this.imgaesLength) {
        // this.$mitt.emit("detailImgLoad");
        this.$emit("imageLoad");
      }
    }
  },
  watch: {
    detailInfo() {
      // 获取图片个数，监听一旦发生变化则立即响应
      this.imgaesLength = this.detailInfo.detailImage[0].list.length;
      console.log(this.imgaesLength);
    }
  }
};
</script>

<style scoped>
.info-text {
  position: relative;
}
.text-top-style {
  width: 60px;
  height: 1px;
  background-color: #333;
  margin-left: 4px;
}
.text-top-style::before {
  position: absolute;
  left: 4px;
  top: -2.5px;
  display: block;
  content: "";
  width: 5px;
  height: 5px;
  background-color: #333;
}
.text-bot-style {
  width: 60px;
  height: 1px;
  background-color: #333;
  position: absolute;
  right: 4px;
  bottom: 0px;
}
.text-bot-style::after {
  position: absolute;
  right: 0;
  top: -2.5px;
  display: block;
  content: "";
  width: 5px;
  height: 5px;
  background-color: #333;
}
.info-text-desc {
  padding: 10px 4px;
}
.desc {
  font-size: 14px;
  padding-bottom: 6px;
  line-height: 20px;
  margin: 4px 0;
  text-indent: 10px;
}
.img {
  width: 100%;
}
</style>