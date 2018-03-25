<template>
    <div class="wrapper">
        <scroller class="scroller">
             <div class="header"></div>
             <div class="fbs">
                <div class="s-box cell-button">
                    <div class="box-tlt border-bottom"><text class="box-txt">我的订单</text><text class="i-box-in iconfont">&#xe600;</text></div>
                    <div class="box-line">
                        <div class="i-box-l">
                            <text class="i-box-icon iconfont">&#xe673;</text>
                            <text class="i-box-tlt">待付款</text>
                        </div>
                        <div class="i-box-l">
                            <text class="i-box-icon iconfont">&#xe675;</text>
                            <text class="i-box-tlt">待发货</text>
                        </div>
                        <div class="i-box-l">
                            <text class="i-box-icon iconfont">&#xe671;</text>
                            <text class="i-box-tlt">已发货</text>
                        </div>
                        <div class="i-box-l">
                            <text class="i-box-icon iconfont">&#xe672;</text>
                            <text class="i-box-tlt">待评价</text>
                        </div>
                        <div class="i-box-l">
                            <text class="i-box-icon iconfont">&#xe6ac;</text>
                            <text class="i-box-tlt">退换/售后</text>
                        </div>
                    </div>
                </div>

                <div class="s-box cell-button">
                    <div class="box-tlt border-bottom"><text class="box-txt">我的服务</text></div>
                    <div class="box-line line-serve border-bottom">
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-orange">&#xe658;</text><text class="i-box-tlt">拼团订单</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-yellow">&#xe61d;</text><text class="i-box-tlt">邀请好友</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-orange">&#xef12;</text><text class="i-box-tlt">优惠券</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-yellow">&#xe615;</text><text class="i-box-tlt">优先购</text></div>
                    </div>
                    <div class="box-line line-serve border-bottom">
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-orange">&#xe67d;</text><text class="i-box-tlt">礼品卡</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-yellow">&#xe777;</text><text class="i-box-tlt">会员</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-orange">&#xe69d;</text><text class="i-box-tlt">足迹</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-yellow">&#xe64c;</text><text class="i-box-tlt">收藏</text></div>
                    </div>
                    <div class="box-line line-serve">
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-blue">&#xe66a;</text><text class="i-box-tlt">地址</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-blue">&#xe60a;</text><text class="i-box-tlt">客服</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-blue">&#xe691;</text><text class="i-box-tlt">帮助</text></div>
                        <div class="i-box-l"><text class="i-box-icon iconfont i-c-blue">&#xe68a;</text><text class="i-box-tlt">设置</text></div>
                    </div>
                </div>

                <div class="s-box cell-button"></div>
             </div>
        </scroller>

    </div>
</template>
<style>
    .header {
        height: 380px;
    }
    .iconfont {
        font-family: iconfont;
    }
    .scroller{
        margin-bottom: 90px;
    }
    .s-box{
        padding-left: 26px;
        background-color: #fff;
    }
    .box-tlt{
        height: 94px;
    }
    .i-box-in{
        position: absolute;
        top:34px;
        right: 30px;
        color:#333;
    }
    .box-txt{
        font-size:26px;
        padding-top:34px;
        color:#333;
    }
    .box-line{
        height: 132px;
        display: flex;
        padding-right: 30px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
    }
    .i-box-l{
        width: 130px;
        height: 132px;
    }
    .i-box-icon{
        font-size: 50px;
        text-align: center;
        padding-top: 15px;
        height:79px;
        padding-bottom: 10px;
        color:#666;
    }
    .i-box-tlt{
        font-size: 26px;
        text-align: center;
        color:#666;
    }
    .line-serve{
        padding-top: 20px;
        height: 150px;
    }
    .border-bottom{
        border-bottom-width: 1px;
        border-bottom-color: rgba(0,0,0,.15) ;
    }
</style>
<script></script>