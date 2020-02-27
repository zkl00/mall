<template>
  <div id="home">
    <navTab class="nav">
      <div slot="centen" class="font">购物街</div>
    </navTab>
    <swiper :banner="banner"></swiper>
  </div>
</template>
<script>
import navTab from '@/components/common/navTab/navTab'
import {home} from '../../network/home'
import swiper from '../../components/common/swiper/swiper'
export default {
  components:{
    navTab,
    swiper,
  },
  data(){
    return{
      banner:[],
      recommend:[]
    }
  },
  created(){
    this.homeAxios()//请求多个数据
  },
  methods:{
   async homeAxios(){
     const res = await home()
     console.log(res)
     this.banner = res.data.banner.list//轮播图
     this.recommend = res.data.recommend.list
    }
  }
}
</script>
<style >
.nav{
  background-color: var(--color-tint);
  color: aliceblue;
}

</style>


