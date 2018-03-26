<template>
    <div class="wrapper">
        <scroller class="tp-box" scroll-direction="horizontal">
            <div class="box" v-for="i in items">                
                    <image class="i-image" :src="i.img"></image>
                    <text class="i-name">{{i.name}}</text>  
            </div>
        </scroller>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
    }
    .tp-box {
        height:200px;
        padding:20px;
        flex-direction:row;
    }
    .box{
        width: 275px;
        height: 150px;
        margin: 10px;
    }
    .i-name{
        color:#fff;
        font-size: 28px;
        text-align:center;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 57px;
    }
    .i-image{
        position: absolute;
        top:0;
        left: 0;
        width: 275px;
        height: 150px;
    }
</style>
<script>
    export default {
        props:["items"],
        data () {
            return {
            }
        },
        methods: {
            
        }
    }
</script>