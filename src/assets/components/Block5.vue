<template>
    <div class="wrapper">
       
            <div class="box" v-for="i in items">                
                    <image class="i-image" :src="i.img"></image>
                    <text class="i-name">{{i.name}}</text>  
            </div>
        
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
    }
    .box {   
        padding-top: 10px;
        padding-left: 25px;
    }
    .i-image{
        height: 380px;
        width:750px;
        border-radius: 58px;
    }
    .i-name{
        text-align:center;
        font-size: 26px;
        height:80px;
        width:750px;
        padding-left: 20px;
        padding-top: 10px;
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