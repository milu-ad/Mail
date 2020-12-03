<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide"
};
</script>

<style scoped>
.slide {
  padding-top: 1px;
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
}
</style>
