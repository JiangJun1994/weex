<template>
    <div class="wrapper">
        <header2 title="专题"></header2>
        <scroller class="main-list">
            <div class="cell-button">
                <block4 :items="items"></block4>
            </div>
            <div class="cell-button">
                <block5 :items="items"></block5>
            </div>
        </scroller>
       
    </div>
</template>
<style>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #f4f4f4;
    }
    .main-list{
        margin-top:113px;
        margin-bottom:70px;
    }
    .cell-button{
        padding-bottom:10px;
    }
</style>
<script>
    import Header2 from '../components/Header2.vue';
    import Block4 from '../components/Block4.vue';
    import Block5 from '../components/Block5.vue';
    export default {
        components: {
            'header2':Header2,
            'block4':Block4,
            'block5':Block5,
        },
        data(){
            return {
                items:[
                    {img:"http://yanxuan.nosdn.127.net/c08a774e16304cb201ca1c266ab6690e.png?imageView&quality=95&thumbnail=245x245", name:"家居"},
                    {img:"http://yanxuan.nosdn.127.net/4743af3ced158a99e5fa4829375bd26c.png?imageView&quality=95&thumbnail=245x245", name:"行李箱"},
                    {img:"http://yanxuan.nosdn.127.net/ce5d4fe3db1d413f83baacd699ea7f8e.png?imageView&quality=95&thumbnail=245x245", name:"男士服装"},
                    {img:"http://yanxuan.nosdn.127.net/ac33ac633a9b3bae6043ca4a58b35242.png?imageView&quality=95&thumbnail=245x245", name:"女士服装"},
                    {img:"http://yanxuan.nosdn.127.net/8ccd56f0302911af6f9d8e1bf15e5854.png?imageView&quality=95&thumbnail=245x245", name:"电器"},
                    {img:"http://yanxuan.nosdn.127.net/55aa159ba55b5f79f7d46d635b3d2449.jpeg?imageView&quality=95&thumbnail=245x245", name:"数码"},
                    {img:"http://yanxuan.nosdn.127.net/0f3952c028ab30f80f76ce9d59c6f41e.png?imageView&quality=95&thumbnail=245x245", name:"美妆"},
                ]
            }
        }
    }
</script>