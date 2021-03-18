<template>
  <div class="home">
    
    <van-sticky>
      <Header />
      <van-tabs @click="toCategory">
        <van-tab v-for="item in tabList" :name="item.id" :title="item.name" :key="item.name" />
      </van-tabs>
    </van-sticky>

    <keep-alive>
      <router-view />
    </keep-alive>

  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App_index',
  setup() {
    const activeName = ref('a');
    console.log(activeName)
    return { activeName };
  },
  data(){
    return {
      tabList: [{name:'推荐',id: 1100},{name:'居家生活',id: 1005000},{name:'服饰鞋包',id: 1100},{name:'美食酒水',id: 1100},{name:'个护清洁',id: 1100},{name:'母婴亲子',id: 1100},{name:'运动旅行',id: 1100},{name:'数码家电',id: 1100},{name:'严选全球',id: 1100}]
    }
  },
  components: {
    Header
  },
  methods: {
    toCategory(name){
      console.log(name)
    }
  }
}
</script>
<style lang="scss" scoped>
.van-tabs{
  height: 29px;
  ::v-deep .van-tabs__wrap{
    height: 100%;
    .van-tab__text{
      color: #333333;
    }
  }
}
</style>
