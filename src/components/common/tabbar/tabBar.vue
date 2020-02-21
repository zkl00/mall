<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#tab-bar {
  display: flex;
  height: 49px;
  background: #f2f2f2;
  align-items: center;
  text-align: center;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
}

</style>

