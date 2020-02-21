<template>
    <tabBar>
      <tabBarItem path='/home'>
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt />
        <img slot="item-hove" src="@/assets/img/tabbar/home_active.svg" alt />
        <p slot="item-txt">首页</p>
      </tabBarItem>
      <tabBarItem path='/categore'>
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt />
        <img  slot="item-hove" src="@/assets/img/tabbar/category_active.svg" alt />
        <p slot="item-txt">分类</p>
      </tabBarItem>
      <tabBarItem path="cart">
        <img slot="item-icon" src="@/assets/img/tabbar/cart.svg" alt />
        <img  slot="item-hove" src="@/assets/img/tabbar/cart_active.svg" alt />
        <p slot="item-txt">购物车</p>
      </tabBarItem>
      <tabBarItem path="proFile">
       <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt />
        <img  slot="item-hove" src="@/assets/img/tabbar/profile_active.svg" alt />
        <p slot="item-txt">我的</p>
      </tabBarItem>
    </tabBar>
</template>
<script>
import tabBar from "../common/tabbar/tabBar";
import tabBarItem from "../common/tabbar/tabBarItem";
export default {
    components:{
        tabBar,
        tabBarItem
    }
}
</script>
