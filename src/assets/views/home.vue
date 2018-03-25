<template>
    <div class="wrapper">
        <home-header></home-header>
        <topics></topics>
        <scroller class="main-list">
            <div class="cell-button">
                <x-slider :imageList="YXBanners" class="xslider"></x-slider>
                <div class="slogan">
                        <text class="i-slg iconfont">&#xe63a; 网易自营品牌</text>
                        <text class="i-slg iconfont">&#xe63a; 30天无忧退货</text>
                        <text class="i-slg iconfont">&#xe63a; 48小时快速退款</text>
                </div>
            </div>
            <div class="cell-button">
                <block1 :title="makers.title" :items="makers.items"></block1>
            </div>
            <div class="cell-button">
                <block-3 :goods="goodsList"></block-3>
            </div>
        </scroller>
        
    </div>
</template>
<style>
    .iconfont {
        font-family:iconfont;
    }
    .main-list{
        position: fixed;
        top: 168px;
        bottom: 90px;
        left: 0;
        right: 0;
    }
    .slogan{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        background-color: #fff;
    }
    .i-slg{
        height: 66px;
        font-size: 26px;
        padding-top: 16px;
        flex: 1;
        text-align: center;
        color: #b4282d;
    }
    .cell-button{
        padding-bottom: 18px;
    }
</style>
<script>
    import Header from '../components/Header.vue';
    import Topics from '../components/Topics.vue';
    import FiveTopics from '../components/FiveTopics.vue';
    import XSlider from '../components/XSlider.vue';
    import Block1 from '../components/Block1.vue';
    import Block3 from '../components/Block3.vue';
    export default {
        data () {
            return {
                YXBanners:[
                    {src:'http://yanxuan.nosdn.127.net/02689684fe48491fcc6fd10e8f77248c.jpg?quality=95&thumbnail=1920x420&imageView'},
                    {src:'http://yanxuan.nosdn.127.net/f6b72d4923c015989e6c01742c66c95d.jpg?quality=95&thumbnail=1920x420&imageView'},
                    {src:'http://yanxuan.nosdn.127.net/738c787af517dde1dbaa8f603350ee25.jpg?quality=95&thumbnail=1920x420&imageView'},
                    {src:'http://yanxuan.nosdn.127.net/3b188c8485ab9d88c081a510e623a709.jpg?quality=95&thumbnail=1920x420&imageView'},
                    {src:'http://yanxuan.nosdn.127.net/2a779db6077f09f284bc6aa9950be246.jpg?quality=95&thumbnail=1920x420&imageView'},
                    {src:'http://yanxuan.nosdn.127.net/be8e4b6aa3d1de50ad1331244ca20fdf.jpg?quality=95&thumbnail=1920x420&imageView'}
                ],
                goodsList:[
                    {img:'http://yanxuan.nosdn.127.net/0899ef5459016242075e5d1adc66a9d3.png?imageView&quality=95&thumbnail=245x245',info:'时尚牛仔裤',tlt:'牛仔裤',price:'209'},
                    {img:'http://yanxuan.nosdn.127.net/56672af18d27710fd68e4a5036dd610b.png?imageView&quality=95&thumbnail=245x245',info:'花呢外套',tlt:'外套',price:'439'},
                    {img:'http://yanxuan.nosdn.127.net/fa3cc8aa52d0a89cf83a52c3fcc42059.png?imageView&quality=95&thumbnail=245x245',info:'长袖家居服',tlt:'家居服',price:'230'},
                    {img:'http://yanxuan.nosdn.127.net/a0e4a45e2c91d9798ff2caba9c15883c.png?imageView&quality=95&thumbnail=245x245',info:'针织连衣裙',tlt:'连衣裙',price:'349'},
                ],
                makers: {
                    title:'品牌制造商直供',
                    items: [
                        {bg:"http://yanxuan.nosdn.127.net/658740b859cdcf0ee793f235076ec250.png?imageView&quality=95&thumbnail=245x245",name:"家用电器制造",price:"300",state:""},
                        {bg:"http://yanxuan.nosdn.127.net/c26b2409998dc605f7fe63232619b5d1.png?imageView&quality=95&thumbnail=245x245",name:"衬衣制造",price:"100",state:""},
                        {bg:"http://yanxuan.nosdn.127.net/115d36a542c34520f17f58aa168e6b73.png?imageView&quality=95&thumbnail=245x245",name:"家居制造",price:"200",state:""},
                        {bg:"http://yanxuan.nosdn.127.net/ee60377a8d743036f82ae0de1c42cab0.png?imageView&quality=95&thumbnail=245x245",name:"餐厨制造",price:"60",state:""},
                    ]
                },
            }
        },
        components: {
            'home-header': Header,
            'topics': Topics,
            'five-topics':FiveTopics,
            'x-slider':XSlider,
            'block1':Block1,
            'block3':Block3,
        }
    }
</script>