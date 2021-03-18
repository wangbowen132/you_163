<template>
  <div class="recommend" v-if="yanxuanList.freshmanFlag">

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in yanxuanList.focusList" :key="index">
        <img :src="item.picUrl" alt="">
      </van-swipe-item>
    </van-swipe>

    <van-row class="service_info">
      <van-col span="8" v-for="(item,index) in yanxuanList.policyDescList" :key="index">
        <i class="icon" :style="'background-image:url(' + item.icon + ')'"></i>
        <span>{{item.desc}}</span>
      </van-col>
    </van-row>

    <!-- 九宫格 -->
    <van-grid :border="false" :column-num="5" class="kingKong">
      <van-grid-item v-for="(item,index) in yanxuanList.kingKongModule.kingKongList" :key="index">
        <van-image :src="item.picUrl" />
        <div class="text">{{ item.text }}</div>
      </van-grid-item>
    </van-grid>

    <div class="bigPromotion">
      <div class="floor floor_1">
        <a href="#" class="promItem promItem_1"></a>
      </div>
      <van-row class="floor floor_2"  gutter="4">
        <van-col span="12">
          <a href="#" class="promItem promItem_2"></a>
        </van-col>
        <van-col span="12">
          <a href="#" class="promItem promItem_3"></a>
        </van-col>
      </van-row>
    </div>

    <lazy-component>
      <div class="freshman">
        <div class="moduleTitle">
          <span class="text">
            新人专享礼
          </span>
        </div>
        <van-row class="content" gutter="5">
          <van-col class="left" span="12">
            <div class="title">新人专享礼包</div>
            <div class="imgWrap">
              <img v-lazy="imageList[0]" alt="">
              <div class="animate" :style="'background-image:url(' + imageList[1] + ')'"></div>
            </div>
          </van-col>
          <van-col class="right" span="12">
            <div class="module1">
              <div class="info">
                <div class="title">福利社</div>
                <div class="subtitle">今日特价</div>
              </div>
              <div class="picWrap">
                <img v-lazy="imageList[2]" alt="">
                <div class="discount">
                  <div class="line1">￥39.9</div>
                  <del class="line2">￥49</del>
                </div>
              </div>
            </div>
            <div class="module2">
              <div class="info">
                <div class="title">新人拼团</div>
                <div class="tag">1元起包邮</div>
              </div>
              <div class="picWrap">
                <img v-lazy="imageList[3]" alt="">
                <div class="discount">
                  <div class="line1">￥39.9</div>
                  <del class="line2">￥49</del>
                </div>
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
    </lazy-component>

    <lazy-component>
      <div class="hotSell">
        <div class="moduleTitle">
          <div class="left">类目热销榜</div>
        </div>
        <div class="content">
          <van-row class="item_big" gutter="5">
                <van-col span="12" class="item_big_1">
                  <div class="name">
                    <span class="text">{{categoryList[0].categoryName}}</span>
                  </div>
                  <div class="imgWrap">
                    <img v-lazy="categoryList[0].showPicUrl" alt="">
                  </div>
                </van-col>
                <van-col span="12" class="item_big_2">
                  <div class="name">
                    <span class="text">{{categoryList[1].categoryName}}</span>
                  </div>
                  <div class="imgWrap">
                    <img v-lazy="categoryList[1].showPicUrl" alt="">
                  </div>
                </van-col>
          </van-row>
          <van-grid :column-num="4" :border="false" class="categoryHotSell">
            <van-grid-item v-for="(item,index) in categoryList.slice(2)" :key="index">
              <div class="text">{{ item.categoryName }}</div>
              <div class="van-image">
                <img class="van-image__img" v-lazy="item.showPicUrl" />
              </div>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </lazy-component>

    <lazy-component>
      <van-row class="shoppingGuide">
        <van-col v-for="(item, index) in yanxuanList.sceneLightShoppingGuideModule" :key="index">
          <div class="title">{{item.styleItem.title}}</div>
          <div class="subtitle">{{item.styleItem.desc}}</div>
          <div class="imgWrap">
            <img v-lazy="item.styleItem.picUrlList[0]" alt="">
          </div>
          <div class="imgWrap">
            <img v-lazy="item.styleItem.picUrlList[1]" alt="">
          </div>
        </van-col>
      </van-row>
    </lazy-component>

    <div class="floorWrap">
      <div class="fl_row">
        <a>
          下载app
        </a>
        <a>
          电脑版
        </a>
      </div>
      <p class="subtitle">
        网易公司版权所有 © 1997-
        <br />
        食品经营许可证：JY13301080111719
      </p>
    </div>

    <div style="height:49px"></div>
  </div>
  
</template>

<script>

export default {
  name: 'Recommend',
  data(){
    return {
      imageList: [],
      yanxuanList: {},
      categoryList: []
    }
  },
  mounted(){
    this.$axios.get('http://localhost:5432/getimagelist').then(res => {
      this.imageList = res.data;
    })
    this.$axios.get('http://localhost:5432/getyanxuan').then(res => {
      this.yanxuanList = res.data.data.data;
      this.categoryList = this.yanxuanList.categoryHotSellModule.categoryList;
    })
  }
}
</script>
<style lang="scss" scoped>
.recommend{
  background-color: #EEEEEE;
  .moduleTitle{
    height: 45px;
  }
  .moduleTitle,.title{
    font-size: 16px;
  }
  .subtitle{
    font-size: 12px;
    color: #999;
    margin-top: 4px;
  }
  .tag{
    height: 16px;
    line-height: 16px;
    background-color: #CBB693;
    color: white;
    display: inline-block;
    padding: 0 3px;
    border-radius: 2px;
  }
  .my-swipe{
    height: 142px;
    .van-swipe-item img{
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      
    }
    ::v-deep .van-swipe__indicator{
      width: 19px;
      height: 2px;
      border-radius: 0;
    }
  }
  .service_info{
    padding: 0 16px;
    background-color: white;
    font-size: 12px;
    .van-col{
      text-align: center;
      .icon{
        vertical-align: middle;
        display: inline-block;
        height: 16px;
        width: 16px;
        background-repeat: no-repeat;
        background-size: 100%;
      }
      span{
        margin-left: 4px;
        line-height: 35px;
      }
    }
  }
  .van-grid{
    font-size: 12px;
    ::v-deep .van-grid-item__content{
      padding: 9px 5px;
      .text{
        margin-top: 5px;
      }
    }
  }
  .bigPromotion{
    .promItem{
      display: block;
      background-size: 100%;
    }
    .promItem_1{
      width: 100%;
      height: 160px;
      background-image: url("https://yanxuan.nosdn.127.net/b2b424826a63b41dc28610c4dee2747e.gif?imageView&quality=100");
    }
    .floor_2{
      padding: 8px;
      .promItem_2{
        width: 176px;
        height: 93px;
        background-image: url("https://yanxuan.nosdn.127.net/6dbeb0e875fbacd66309f3c58d55d531.png?quality=75&type=webp&imageView&thumbnail=375x0");
      }
      .promItem_3{
        width: 176px;
        height: 93px;
        background-image: url("https://yanxuan.nosdn.127.net/b992a96f096902012764f80ba7dd6553.png?quality=75&type=webp&imageView&thumbnail=375x0");
      }
    }
  }
  .freshman,.hotSell{
    padding-left: 15px;
    padding-bottom: 15px;
    background-color: white;
  }
  .freshman{
    margin: 10px 0;
    .moduleTitle{
      text-align: center;
      .text{
        position: relative;
        line-height: 45px;
        &::before,&::after{
          content: "";
          position: absolute;
          top: 7px;
          width: 12px;
          height: 2px;
          background: #333;
        }
        &::before{
          left: -20px;
        }
        &::after{
          right: -20px;
        }
      }
    }
    .content{
      .left{
        width: 172px;
        border-radius: 3px;
        .title{
          padding-top: 15px;
          padding-left: 15px;
        }
        background-color: #F9E9CF;
        .imgWrap{
          margin: 27px auto;
          width: 129px;
          position: relative;
          img{
            width: 100%;
          }
          .animate{
            position: absolute;
            bottom: 12.5px;
            right: 32.5px;
            width: 15px;
            height: 10px;
            background-size: 100%;
            animation: circularly 1s linear infinite;
          }
        }
      }
      .right{
        width: 172px;
        .module1{
          background-color: #FBE2D3;
          margin-bottom: 3px;
        }
        .module2{
          background-color: #FFECC2;
          
        }
        .module1,.module2{
          border-radius: 3px;
          padding-top: 10px;
          padding-left: 14px;
          position: relative;
          height: 97px;
          .picWrap{
            width: 100px;
            height: 100px;
            position: absolute;
            right: 0;
            bottom: 0;
            img{
              width: 100%;
            }
            .discount{
              font-size: 12px;
              position: absolute;
              top: 0px;
              right: 8px;
              text-align: center;
              background-color: #f6a447;
              color: white;
              border-radius: 50%;
              padding-top: 9px;
              width: 40px;
              height: 31px;
            }
          }
        }
      }
    }
  }
  .hotSell{
    margin-bottom: 10px;
    .left{
      line-height: 45px;
    }
    .item_big{
      width: 345px;
      text-align: center;
      padding-bottom: 5px;
      .name{
        width: 68px;
        padding-top: 38px;
        .text{
          position: relative;
          display: inline-block;
          font-size: 14px;
          &::before{
            content: '';
            position: absolute;
            bottom: -10px;
            width: 24px;
            height: 2px;
            background-color: black;
          }
        }
      }
      .imgWrap{
        width: 104px;
        img{
          width: 100%;
        }
      }
      .item_big_1,.item_big_2{
        display: flex;
        justify-content: space-between;
        height: 100px;
        border-radius: 2px;
      }
      .item_big_1{
        .name{
          background-color: #F9F3E4;
        }
        .imgWrap{
          background-color: #FFFFFF;
        }
      }
      
      .item_big_2{
        background-color: #EBEFF6;
      }
    }
    .categoryHotSell{
      width: 350px;
      height: 185px;

      ::v-deep .van-grid-item__content{
        margin-right: 5px;
        margin-bottom: 5px;
        height: 90px;
        background-color: #F5F5F5;
      }
    }
  }
  .shoppingGuide{
    padding-top: 8px;
    padding-left: 15px;
    background-color: white;
    height: 155px;
    margin-bottom: 10px;
    .van-col:nth-of-type(1){
      margin-right: 2px;
    }
    .van-col{
      background-color: #F5F5F5;
      width: 172px;
      border-radius: 3px;
      padding-top: 10px;
      padding-left: 10px;
      position: relative;
      height: 132px;
      .imgWrap{
        width: 75px;
        height: 75px;
        position: absolute;
        bottom: 0;
        img{
          width: 100%;
        }
      }
      div:last-child{
        right: 0;
      }
    }
  }
  .floorWrap{
    background-color: #414141;
    box-sizing: border-box;
    padding: 28px 10px;
    height: 120px;
    .fl_row{
      text-align: center;
      width: 100%;
      margin-bottom: 18px;
      a{
        display: inline-block;
        line-height: 29px;
        width: 84px;
        border: 1px solid #999;
        background-color: #414141;
        border-radius: 4px;
        color: white;
        height: 100%;
      }
    }
    a:first-child{
      margin-right: 25px;
    }
    p{
      text-align: center;
      width: 100%;
      line-height: 1.4;
    }
  }
}
@keyframes circularly{
  0% {
    background-image:url(//yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png)
  }
  50% {
    background-image:url(//yanxuan.nosdn.127.net/d635ac1cf1b2bde41e96ea43dacf0cfc.png)
  }
  100% {
    background-image:url(//yanxuan.nosdn.127.net/bf881c47a51af89a723d97d58b2bca9e.png)
  }
}
</style>
