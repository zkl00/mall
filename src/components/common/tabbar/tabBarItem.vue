<template>
  <div class="tab-bar-item" @click="hanclick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-hove"></slot>
    </div>
  <div :class="{active:isActive}">
    <slot name="item-txt"></slot>
    </div>
    
  </div>
</template>
<script>
export default {
  props:{
    path:{
      type:String
    }
  },
  data(){
    return{
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !=-1
    }
  },
  methods:{
    hanclick(){
      console.log(this.path)
      this.$router.push(this.path)
    }
  }
};
</script>
<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
}
.active{
  color: red;
}
</style>


