<template>
  <div class="back-top" @click="backClick">
    <img src="~assets/images/back-top.png" alt />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  props: {},
  methods: {
    backClick() {
      this.$emit("backClick");
    }
  }
};
</script>

<style>
.back-top {
  position: fixed;
  right: 12px;
  bottom: 60px;
}
.back-top img {
  width: 45px;
  height: 45px;
}
</style>