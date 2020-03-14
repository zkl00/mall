<template>
  <div class="goodList">
      <GoodListItem v-for="item in goods" :key="item.id" :goodListItem="item"></GoodListItem>
  </div>
</template>
<script>
import GoodListItem from './GoodListItem'
export default {
    components:{
        GoodListItem
    },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.goodList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>


