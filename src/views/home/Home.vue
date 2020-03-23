<template>
  <div id="home">
    <navTab class="nav">
      <div slot="centen" class="font">购物街</div>
    </navTab>
     <tabconten :tabcontent="['流行','新款','精选']" class="tab-content1" @tabClick="tabClick" ref="tebContnts1" v-show="flay"/>
    <Scroll
      class="scroll"
      ref="scroll"
      :pullupload="true"
      :scroll-type="3"
      @monitoringMobile="monitoringMobile"
      @pullupload="pullupload"
    >
      <swiper :banner="banner" @swiperOload="swiperOload"></swiper>
      <recommend :recommend="recommend" />
      <FeatreView />
      <tabconten :tabcontent="['流行','新款','精选']" class="tab-content" @tabClick="tabClick" ref="tebContnts2" />
      <!-- 商品列表 -->
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>
    <dropdownIcon @click.native="iconClick" v-if="hide" />
  </div>
</template>
<script>
import { home, getHOmeGoodes } from "../../network/home";
import navTab from "@/components/common/navTab/navTab";
import swiper from "../../components/common/swiper/swiper";
import recommend from "./chidlConten/Recommend/Recommend";
import FeatreView from "./chidlConten/FeatreView/FeatureView";
import tabconten from "@/components/content/TabConten";
import Scroll from "@/components/content/scroll/Scroll";
import GoodsList from "../../components/content/goods/GoodsList";
import dropdownIcon from "../../components/content/dropdownIcon/dropdownIcon";
import { clearTimeout, setTimeout } from "timers";
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
  components: {
    navTab,
    swiper,
    recommend,
    FeatreView,
    tabconten,
    GoodsList,
    Scroll,
    dropdownIcon
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      indexType: "pop",
      hide: false,
      heightOffsetTop:0,
      flay:false,
      scrollY:'',
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.indexType].list;
    }
  },
  created() {
    this.homeAxios(); //请求多个数据
    this.getHoneData("pop");
    this.getHoneData("new");
    this.getHoneData("sell");
  },
  mounted() {
    // 监听图片加载完成
    let refresh = this.debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on("londImg", () => {
      // this.$refs.scroll.refresh()
      refresh()
      
    });
    
  },
  /**销毁路由 */
  destroyed(){
    // console.log("object")
  },
  // 创建路由
  activated(){
    // console.log('创建路由')
    this.$refs.scroll.scrollList(0,this.scrollY,0)
    this.$refs.scroll.scroll.refresh()
  },
  // 离开路由
  deactivated(){
    // console.log('离开')
    this.scrollY = this.$refs.scroll.scroll.y
  },
    methods: {
    // 防抖动事件
    debounce(func, delay) {
      let time = null;
    return function(...arg){
      if(time) clearTimeout(time)
      time = setTimeout(()=>{
        func.apply(this,arg)
      },delay)
    }
    },

    /****
    监听事件
     */
    monitoringMobile(e) {
      // 监听拉的的图片是否现显示
       this.hide = (e.y) < -1000
      //隐藏导航  判断是否显示导航
        this.flay = (-e.y)>this.heightOffsetTop
    },
    iconClick() {
      this.$refs.scroll.scrollList(0, 0);
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.indexType = "pop";
          break;
        case 1:
          this.indexType = "new";
          break;
        case 2:
          this.indexType = "sell";
      }
      this.$refs.tebContnts2.indexS = index
       this.$refs.tebContnts1.indexS = index
    },
    //监听下拉加载更多
    pullupload() {
      // console.log("下拉加载更多")
      this.getHoneData(this.indexType);
    },
    /**子传父监听 */
    swiperOload(){
      //吸顶效果
    // console.log(this.$refs.tebContnts2.$el.offsetTop)
    this.heightOffsetTop = this.$refs.tebContnts2.$el.offsetTop
    },
    /***
    网络请求
     */
    async homeAxios() {
      const res = await home();
      // console.log(res);
      this.banner = res.data.banner.list; //轮播图
      this.recommend = res.data.recommend.list; //
    },
    async getHoneData(type) {
      const page = this.goods[type].page + 1;
      const res = await getHOmeGoodes(type, page);
      // console.log(res);
      let arr = res.data.list;
      this.goods[type].list.push(...arr);
      this.goods[type].page += 1;
      //
      this.$refs.scroll.scroll.finishPullUp();
    }
  }
};
</script>
<style >
#home {
  padding-top: 40px;
  height: 100vh;
  position: relative;
}
.nav {
  background-color: var(--color-tint);
  color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
.tab-content1{
   position: sticky;
  top: 48px;
  z-index: 9;
}
.tab-content {
  position: sticky;
  top: 48px;
  z-index: 9;
}
.scroll {
  overflow: hidden;
  position: absolute;
  top: 49px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>


