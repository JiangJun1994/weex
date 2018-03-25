<template>
    <div class="wrapper">
        <header2 title="购物车" :rightBtn="rightBtn"></header2>
        <div class="slogan">
            <text class="i-slg iconfont">&#xe63a; 30天无忧退换货</text>
            <text class="i-slg iconfont">&#xe63a; 48小时快速退款</text>
            <text class="i-slg iconfont">&#xe63a; 满88元免邮费</text>
        </div>
        <scroller class="main-list" >
            
            <div class="shop-cart">
                <div class="cart-empty">
                    <image class="img-empty" resize="contain" src="http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"></image>
                    <text class="txt-empty">去添加点什么吧</text>
                </div>
            </div>
            <block-3 :goods="goods"></block-3>
        </scroller>
    </div>
</template>
<style>
    .iconfont {
        font-family:iconfont;
    }
    .slogan{
        top:110px;
        width:750px;
        diaplay:flex;
        flex-direction:row;
        flex-wrap:nowrap;
    }
    .i-slg{
        height: 66px;
        font-size: 26px;
        padding-top: 16px;
        flex: 1;
        text-align: center;
        color: #b4282d;
    }
    .main-list{
        margin-top: 170px;
        margin-bottom: 90px;
    }
    .cart-empty{
        height: 350px;
    }
    .img-empty{
        position: absolute;
        width: 750px;
        height: 230px;
        top:20px;
        left: 0;
    }
    .txt-empty{
        position: absolute;
        text-align: center;
        font-size: 30px;
        width: 750px;
        top:250px;
        color:#999;
    }
</style>
<script>
    import Header2 from '../components/Header2.vue';
    import Block3 from '../components/Block3.vue';
    export default {
        components:{
            'header2':Header2,
            'block-3':Block3,
        },
        data() {
            return {
                rightBtn:{
                    name:'编辑',
                },
                goods:[
                    {img:'http://yanxuan.nosdn.127.net/0899ef5459016242075e5d1adc66a9d3.png?imageView&quality=95&thumbnail=245x245',info:'时尚牛仔裤',tlt:'牛仔裤',price:'209'},
                    {img:'http://yanxuan.nosdn.127.net/56672af18d27710fd68e4a5036dd610b.png?imageView&quality=95&thumbnail=245x245',info:'花呢外套',tlt:'外套',price:'439'},
                    {img:'http://yanxuan.nosdn.127.net/fa3cc8aa52d0a89cf83a52c3fcc42059.png?imageView&quality=95&thumbnail=245x245',info:'长袖家居服',tlt:'家居服',price:'230'},
                    {img:'http://yanxuan.nosdn.127.net/a0e4a45e2c91d9798ff2caba9c15883c.png?imageView&quality=95&thumbnail=245x245',info:'针织连衣裙',tlt:'连衣裙',price:'349'},
                    ]
            }
        },
        
    }
</script>