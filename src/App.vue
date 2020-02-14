<template>
  <div id="app">
   <tabBar/> 
    <router-view/>
  </div>
</template>
<script>
import tabBar from '../src/components/common/tabbar/tabBar'
export default {
  components:{
    tabBar
  }
}
</script>

<style lang="scss">
@import './assets/css/base.css'

</style>
