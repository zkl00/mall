<template>
  <div id="app">
    <keep-alive>
     <router-view />
     </keep-alive>
    <mineTabBar/>
  </div>
</template>
<script>
import mineTabBar from './components/content/mineTabBar'
export default {
  components: {
   mineTabBar
  }
};
</script>

<style lang="scss">
@import "./assets/css/base.css";
</style>
