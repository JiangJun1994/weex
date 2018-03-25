<template>
    <div class="wrapper">
        <div class="scan">
            <text class="ic iconfont">&#xe689;</text>
            <text class="txt">扫一扫</text>
        </div>
       
          <text class="search iconfont">&#xe65c; 搜索商品，共8888款好物</text>
       
        <div class="notice">
             <text class="ic iconfont">&#xe70a;</text>
             <text class="txt">消息</text>
        </div>
    </div>
</template>

<style>
    .iconfont {
      font-family:iconfont;
    }
    .wrapper {
      position:fixed;
      top:0;
      left:0;
      right:0;
      height:114px;
      padding-top:44px;
      display:flex;
      flex-wrap:nowrap;
      flex-direction:row;
      justify-content:space-around;
      baackground-color:#fafafa;
      opacity:0.99;
    }
    .scan, .notice {
      height:80px;
      width:96px;
    }
    .ic, .txt, .search {
      text-align:center;
      color:#666;
      font-weight:300;
    }
       .ic{
        font-size: 32px;
    }
    .txt{
        font-size: 18px;
     }
    .search {
      height:60px;
      background-color: #ededed;
      font-size:26px;
      padding-top:13px;
      border-radius:8px;
      flex:1; 
    }
</style>

<script>

</script>