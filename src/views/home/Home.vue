<template>
  <div id="home">
    <navTab class="nav">
      <div slot="centen" class="font">购物街</div>
    </navTab>
    <swiper :banner="banner"></swiper>
    <recommend :recommend="recommend"/>
    <FeatreView/>
    <tabconten :tabcontent="['流行','新款','精选']" class="tab-content" />
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
import {home} from '../../network/home'
import navTab from '@/components/common/navTab/navTab'
import swiper from '../../components/common/swiper/swiper'
import recommend from './chidlConten/Recommend/Recommend'
import FeatreView from './chidlConten/FeatreView/FeatureView'
import tabconten from '@/components/content/TabConten'
export default {
  components:{
    navTab,
    swiper,
    recommend,
    FeatreView,
    tabconten
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
#home{
  padding-top:40px; 
}
.nav{
  background-color: var(--color-tint);
  color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
.tab-content{
  position: sticky;
  top: 54px;
}

</style>


