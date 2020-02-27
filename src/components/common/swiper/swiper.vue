<template>
  <swiper class="swiper" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in banner" :key="index" class="newimg">
      <a :href="item.link" :title="item.title">
        <img :src="item.image" :alt="item.title" />
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> 左边的按钮-->
    <!-- <div class="swiper-button-next" slot="button-next"></div> 右边的按钮-->
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "carrousel",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    banner: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        // spaceBetween: 30, //板块间距
        loop: true, //无缝轮播
        centeredSlides: true,
        autoplay: {
          //自动轮播
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false)
    console.log("mounted");
    //鼠标覆盖停止自动切换
    this.swiper.el.onmouseover = function() {
      this.swiper.autoplay.stop();
      console.log("stop");
    };
    //鼠标离开开始自动切换
    this.swiper.el.onmouseout = function() {
      this.swiper.autoplay.start();
      console.log("start");
    };
  }
};
</script>
<style>
.swiper {
  width: 100%;
  height: 200px;
}
.newimg img{
    width: 100%;
    height: 100%;
}
</style>

