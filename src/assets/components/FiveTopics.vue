<template>
    <div  class="wrapper">
        
            <div class="bar-item" @click="jump('/home')" >
                <text class="bar-ic iconfont" :class="[this.isActive('home')]">&#xe660;</text>
                <text class="bar-txt" :class="[this.isActive('home')]">首页</text>
            </div>
        
        
            <div class="bar-item" @click="jump('/topic')">
                <text class="bar-ic iconfont" :class="[this.isActive('topic')]">&#xe744;</text>
                <text class="bar-txt" :class="[this.isActive('topic')]">专题</text>
            </div>
     
       
            <div class="bar-item" @click="jump('/class')">
                <text class="bar-ic iconfont" :class="[this.isActive('class')]">&#xe605;</text>
                <text class="bar-txt" :class="[this.isActive('class')]">分类</text>
            </div>
        
        
            <div class="bar-item" @click="jump('/shop')">
                <text class="bar-ic iconfont" :class="[this.isActive('shop')]">&#xe61a;</text>
                <text class="bar-txt" :class="[this.isActive('shop')]">购物车</text>
            </div>
        
        
            <div class="bar-item" @click="jump('/my')">
                <text class="bar-ic iconfont" :class="[this.isActive('my')]">&#xe639;</text>
                <text class="bar-txt" :class="[this.isActive('my')]">个人</text>
            </div>
      
    </div>
</template>
<style>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper {
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        height:90px;
        flex-wrap:nowrap;
        flex-direction:row;
        justify-content: space-around;
        border-top-width:1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .bar-item {
        flex:1;
    }
    .bar-ic{
        padding-top: 14px;
        font-size: 38px;
        text-align:center;
    }
    .bar-txt{
        font-size: 22px;
        padding-top: 2px;
        text-align:center;
    }
    .bar-active {
        color:#b4282d;
    }
</style>
<script>
    export default {
         data (){
             return {
                 choosedIndex:'home',
             }
         },
         methods:{
            jump(url) {
                this.choosedIndex = url.slice(1);
                this.$router.push( url)
            },
            isActive:function (_c) {
                return this.choosedIndex === _c ?'bar-active':''
            },
    }
    }
</script>