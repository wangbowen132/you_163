<template>
  <div>
    <van-tabbar v-model="active" active-color="#ee0a24">
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/classify" icon="van-icon iconfont icon-guizi">分类</van-tabbar-item>
      <van-tabbar-item to="/topic" icon="goods-collect-o">值得买</van-tabbar-item>
      <van-tabbar-item to="/shoppingcart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/personal" icon="user-o" dot>个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: 0
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.van-tabbar{
  border-top: 1px solid #EEEEEE;
  ::v-deep .icon-guizi{
    font-size: 21px;
  }

}
</style>