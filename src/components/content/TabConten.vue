<template>
  <div class="Tabconten">
      <div v-for="(item,index) in tabcontent" :key="index" class="tab-item">
          <div :class="{active:index===indexS}" @click="tabclick(index)">{{item}}</div>
          <p :class="{botomTab:index== indexS}"></p>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    tabcontent: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
      return{
          indexS:0,
      }
  },
  methods:{
    //tab的切换
      tabclick(e){
          this.indexS = e
          this.$emit("tabClick",e)
      }
  }
};
</script>
<style scoped>
.botomTab{
    border-bottom: 2px solid var(--color-high-text);
    padding: 2px 10px;
    width: 100%;
}
.Tabconten{
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    width: 100%;
    height: 40px;
    align-items: center;
    background-color: #ffff;
}
.active{
    color: var(--color-high-text);
}
</style>


