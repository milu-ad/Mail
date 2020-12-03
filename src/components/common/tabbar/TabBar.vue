<template>
  <div>
    <div id="tab_bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
#tab_bar {
  display: flex;
  background-color: #eee;
  position: fixed;
  z-index: 11;
  bottom: 0;
  right: 0;
  left: 0;
  /* 水平阴影位置，垂直阴影位置，模糊程度，颜色 */
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.6);
}
</style>