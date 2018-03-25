<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
    <div class="box1">
      <text>12</text>
    </div>
    <a href="../dist/app.weex.js"><text>jump</text></a>
    <div class="srcs">
      <web :src="src"></web>
    </div>
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
  .box1 {width:200px; height:200px; background-color:red}
  .srcs{width:400px; height:400px;}
</style>

<script>
  const webview = weexr.equireModule('webView');
  export default {
    data: {
      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
      target: 'World',
      src:"http://imooc.com",
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>
