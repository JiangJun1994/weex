<template>
    <slider class="slider" >
        <div class="frame" v-for="img in imageList">
            <img class="image" :src="img.src"></img>
        </div>
        <indicator class="indicator"></indicator>
    </slider>
</template>
<style>
    .slider{
        width:750px;
        height:430px;
    }
    .image {
        width:750px;
        height:430px;
    }
    .frame{
        width: 750px;
        height: 430px;
        position: relative;
    }
    .indicator{
        width: 750px;
        height: 40px;
        item-color: white;
        item-selected-color: #b4282d;
        item-size: 12px;
        position: absolute;
        bottom: 10px;
        right: 0px;
    }
</style>
<script>
    export default {
        props:["imageList"],
        data () {
            return {

            }
        },
        methods:{}
    }
</script>