<template>
   <div class="wrapper">
    <scroller class="scroller" scroll-direction="horizontal">
        <text class="i-c">推荐</text>
        <text class="i-c">限时购</text>
        <text class="i-c">新品</text>
        <text class="i-c">居家</text>
        <text class="i-c">餐厨</text>
        <text class="i-c">配件</text>
        <text class="i-c">服装</text>
        <text class="i-c">电器</text>
        <text class="i-c">洗护</text>
        <text class="i-c">杂货</text>
        <text class="i-c">饮食</text>
        <text class="i-c">婴童</text>
        <text class="i-c">志趣</text>
    </scroller>
    <text class="more iconfont">&#xe661;</text>
   </div>
</template>
<style>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper {
        position:fixed;
        top:114px;
        left:0;
        right:0;
        z-index: 10;
        background-color: #fafafa;
        border-bottom-width: 1px;
        border-bottom-color: #d9d9d9;
    }
    .scroller {
        height: 54px;
        flex-direction: row;
    }
    .i-c {
        padding-top:10px;
        padding-left:45px;
        padding-right:45px;
        padding-bottom:6px;
        font-size:26px;
        color:#333;
    }
    .more {
        position:absolute;
        top:0;
        right:0;
        height:52px;
        width:100px;
        background-color: #fafafa;
        text-align:center;
        padding-top:10px;
        opacity:0.9;
    }
</style>
<script></script>