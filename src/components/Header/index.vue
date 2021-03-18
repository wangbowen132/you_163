<template>
  <van-row class="header">
    <van-col>
      <div class="header_logo_img"></div>
    </van-col>
    <van-col>
      <van-search
        v-model="value"
        placeholder="搜索商品，共57084款好物"
      />
    </van-col>
    <van-col>
      <van-button plain type="danger">登录</van-button>
    </van-col>
  </van-row>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  padding: .213333rem .373333rem;
  height: .746667rem;
  background-color: white;
  .van-col{
    height: 100%;
    // 使内部的 inline-block 元素排在一行
    font-size: 0;
  }
  .header_logo_img{
    background: url('../../assets/img/you_logo.png') no-repeat;
    background-size: 1.76rem .426667rem;
    height: .426667rem;
    width: 1.84rem;
    margin-right: .266667rem;
    margin-top: .133333rem;
  }
  .van-search{
    padding: 0;
    width: 5.893333rem;
    height: 100%;
    .van-search__content {
      padding: 0;
      background-color: #EDEDED;
      border-radius: .106667rem;
      height: 100%;
      .van-cell{
        padding: 0;
        align-items: center;
        justify-content: center;
        ::v-deep .van-cell__value{
          flex: 0 1 auto;
          .van-field__control::-webkit-input-placeholder {
            color: #666666;
          }
        }
      }
    }
  }
  .van-button{
    height: .533333rem;
    width: .96rem;
    padding: 0;
    border-radius: .08rem;
    font-size: .32rem;
    margin-left: .213333rem;
    margin-top: .08rem;
  }
}
</style>