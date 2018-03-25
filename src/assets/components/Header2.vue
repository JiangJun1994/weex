<template>
    <div class="wrapper">
        <div class="left">
            <text class="lefttxt" v-if="leftBtn">{{leftBtn.name}}</text>
        </div>
        <text class="tlt">{{title}}</text>
        <div class="right">
            <text class="righttxt" v-if="rightBtn">{{rightBtn.name}}</text>
        </div>
    </div>
</template>
<style>
    .wrapper {
        position:fixed;
        top:0;
        left:0;
        right:0;
        height:114px;
        padding-top:44px;
        background-color: #fafafa;
        opacity: .99;
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
        justify-content:space-around;
        border-bottom-color: #d9d9d9;
        border-bottom-width: 1px;
    }
    .left,.right {
        height:80px;
        width:120px;
        padding-top:10px;
    }
    .tlt {
       flex:1;
       font-size: 36px;
       padding-top: 10px;
       color:#333;
       text-align: center;
    }
    .leftTxt,.rightTxt{
        font-size: 30px;
        text-align: center;
    }
</style>
<script>
    export default{
       props:['title','leftBtn','rightBtn'],
    }
</script>