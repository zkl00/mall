<template>
   <div class="goodList">
       <img :src="goodListItem.show.img" alt="" @load="onlondImg">
       <p class="title">{{goodListItem.title}}</p>
       <div class="good_wap">
           <span class="price">￥{{goodListItem.price}}</span>
           <span class="cfav"><img src="../../../assets/img/common/collect.svg" alt="">{{goodListItem.cfav}}</span>
       </div>
   </div>
</template>
<script>
export default {
    props:{
        goodListItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{

        }
    },
    methods:{
        onlondImg(){
            /**事件总线 */
            this.$bus.$emit("londImg")
        }
    }
    
}
</script>
<style scoped>
.goodList{
    width:49%;
    position: relative;
    padding-top:10px; 
    padding-bottom: 10px;
    padding: 2px;
}
.goodList img{
    width: 100%;
    height: 240px;
    border-radius:5px; 
}
.title{
    text-align: center;
    width:260px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 5px 0;
    font-size: 14px;
}
.good_wap{
    display: flex;
}
.good_wap span{
    display: inline-block;
    padding: 0 10px;
}
.price{
      color: var(--color-high-text);
      padding: 0 20px;
      font-size: 12px;
}
.cfav{
    position: relative;
    /* margin-left: 30px; */
    display: flex;
    align-items: center;
     font-size: 12px;

}
.cfav img{
    position: absolute;
    left: 84%;
    width: 15px;
    height: 15px;
    top: -11%;
}
</style>


