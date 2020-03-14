<template>
  <div class="scroll_warp" ref="scroll_warp">
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
// 封装插件 better-scroll 插件的使用
import BScroll from "better-scroll";
export default {
    props:{
      // 监听下拉的位置
        scrollType:{
            type:Number,
            default(){
                return 0
            }
        },
    //监听下拉请求
    pullupload:{
      type:Boolean,
      default(){
        return false
      }
    }
    },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.scroll_warp, {
      probeType:this.scrollType,//监听下划的位置
      click:true,
      pullUpLoad:this.pullupload
    });
    //
    this.scroll.on("scroll", e => {
      this.$emit("monitoringMobile",e)
    });
    //监听下拉刷新
      this.scroll.on("pullingUp",()=>{
        // console.log('下拉加载更多')
        this.$emit("pullupload")
        
    })
    // this.scroll.scrollTo(0,0)  
  },
  methods:{
      //在home里面调用，用ref  回到原点 这个方法scrollTo（）
      scrollList(x,y,time=500){
         this.scroll &&  this.scroll.scrollTo(x,y,time)
      },
      //refresh（）可以解决图片的加载的问题
      refresh(){
      this.scroll &&  this.scroll.refresh()
      // console.log("----")
      }
  }
};
</script>
<style scoped>
</style>

