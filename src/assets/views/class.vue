<template>
    <div class="wrapper">
        <header3></header3>
            <div class="class-list" >
                <scroller class="scroller1" scroll-direction="vertical" >
                    <text class="i-c">推荐区</text>
                    <text class="i-c">家装区</text>
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
            </div>
            <scroller class="main-list">
                <img class="ad-img" src="http://yanxuan.nosdn.127.net/3ebd7addcc0d101d116052a57cec2f16.png"></img>
                <text class="sub-tlt">--- 推荐区分类 ---</text>
                <div class="sub-box" >
                    <div class="sub-i" v-for="i in detailclass">
                        <img class="i-img" :src="i.img"></img>
                        <text class="i-name">{{i.name}}</text>
                    </div>
                </div>
            </scroller>
    </div>
</template>
<style>
    .wrapper{
        background-color: #f4f4f4;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .class-list{
        /*width: 162px;
        margin-top: 113px;
        margin-bottom: 90px;
        padding-top: 20px;
        position: fixed;
        top: 114px;
        left: 0;
        bottom: 90px;
        border-right-width: 1px;
        border-right-color: #d9d9d9;
        background-color: #fff;*/
                width: 162px;
        margin-top: 113px;
        margin-bottom: 90px;
        padding-top: 20px;
        border-right-width: 1px;
        border-right-color: #d9d9d9;
        background-color: #fff;
    }
    .scroller1 {
        flex-direction: column;
        show-scrollbar:false;
    }
    .i-c {
        font-size:28px;
        margin-left:10px;
        margin-right:10px;
        margin-top:22px;
        margin-bottom:26px;
        color:#333;
        text-align:center;
    }
    .sub-tlt{
        text-align: center;
        font-size: 24px;
        color:#333;
        margin-top: 10px;
        margin-bottom: 30px;
    }
    .main-list {
        flex:1;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-top: 113px;
        margin-bottom: 90px;
        background-color: #fff;
    }
    .ad-img{
        width: 532px;
        height: 194px;
        border-radius: 6px;
        margin: 28px;
    }
    .sub-box{
        padding-left: 26px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .sub-i{
        width: 178px;
        height: 200px;
    }
    .i-img{
        width: 150px;
        margin-left: 14px;
        margin-right: 14px;
        height: 150px;
    }
    .i-name{
        font-size: 22px;
        text-align: center;
    }
</style>
<script>
    import Header3 from '../components/Header3.vue';
    export default {
        data (){
            return {
                detailclass:[
                    {img:"http://yanxuan.nosdn.127.net/c08a774e16304cb201ca1c266ab6690e.png?imageView&quality=95&thumbnail=245x245", name:"家居"},
                    {img:"http://yanxuan.nosdn.127.net/4743af3ced158a99e5fa4829375bd26c.png?imageView&quality=95&thumbnail=245x245", name:"行李箱"},
                    {img:"http://yanxuan.nosdn.127.net/ce5d4fe3db1d413f83baacd699ea7f8e.png?imageView&quality=95&thumbnail=245x245", name:"男士服装"},
                    {img:"http://yanxuan.nosdn.127.net/ac33ac633a9b3bae6043ca4a58b35242.png?imageView&quality=95&thumbnail=245x245", name:"女士服装"},
                    {img:"http://yanxuan.nosdn.127.net/8ccd56f0302911af6f9d8e1bf15e5854.png?imageView&quality=95&thumbnail=245x245", name:"电器"},
                    {img:"http://yanxuan.nosdn.127.net/55aa159ba55b5f79f7d46d635b3d2449.jpeg?imageView&quality=95&thumbnail=245x245", name:"数码"},
                    {img:"http://yanxuan.nosdn.127.net/0f3952c028ab30f80f76ce9d59c6f41e.png?imageView&quality=95&thumbnail=245x245", name:"美妆"},
                    {img:"http://yanxuan.nosdn.127.net/f03b73d71a4a84c32db13eddece05cc3.png?imageView&quality=95&thumbnail=245x245", name:"户外"},
                    {img:"http://yanxuan.nosdn.127.net/205c1df9a7e4954de90ae4608d97e14b.png?imageView&quality=95&thumbnail=245x245", name:"旅行"},
                    {img:"http://yanxuan.nosdn.127.net/3e03578041d2c5378335914e6a28c4dc.png?imageView&quality=95&thumbnail=245x245", name:"配饰"},
                    {img:"http://yanxuan.nosdn.127.net/a0696264c99739c7ef14d909206f5b88.png?imageView&quality=95&thumbnail=245x245", name:"鞋子"},
                    {img:"http://yanxuan.nosdn.127.net/115d36a542c34520f17f58aa168e6b73.png?imageView&quality=95&thumbnail=245x245", name:"家具"},
                ],
            }
        },
        components:{
            'header3':Header3,
        },
    }
</script>