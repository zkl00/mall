<template>
    <div class="recommend">
        <div v-for="(item,index) in recommend" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        recommend:{
            type:Array
        }
    }
}
</script>
<style scoped>
.recommend{
    padding: 10px 0 20px 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
    text-align: center;
    font-size: 12px;
    border-bottom: 8px solid #eee;
}
.recommend p{
    padding-top: 5px;
}
.recommend img{
    width: 80px;
    height: 80px;
}
</style>

