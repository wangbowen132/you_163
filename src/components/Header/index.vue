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
  data(){
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  padding: .16rem .28rem;
  height: .52rem;
  .van-col{
    height: 100%;
    // 使内部的 inline-block 元素排在一行
    font-size: 0;
  }
  .header_logo_img{
    background: url('../../assets/you_logo.png') no-repeat;
    background-size: 1.32rem .32rem;
    height: .32rem;
    width: 1.32rem;
    margin-right: .2rem;
    margin-top: .1rem;
  }
  .van-search{
    padding: 0;
    width: 4.56rem;
    height: 100%;
    .van-search__content {
      padding: 0;
      background-color: #EDEDED;
      border-radius: .16rem;
      height: 100%;
      .van-cell{
        padding: 0;
        align-items: center;
        justify-content: center;
        ::v-deep .van-icon{
          font-size: .32rem;
        }
        ::v-deep .van-cell__value{
          flex: 0 1 auto;
          font-size: .28rem;
          .van-field__control::-webkit-input-placeholder {
            color: #666666;
            font-size: .28rem;
          }
        }
      }
    }
  }
  .van-button{
    height: .4rem;
    width: .72rem;
    padding: 0;
    border-radius: .06rem;
    font-size: .24rem;
    margin-left: .14rem;
    margin-top: .06rem;
  }
}
</style>