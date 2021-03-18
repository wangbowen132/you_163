<template>
  <div id="app">

    <keep-alive>
      <router-view />
    </keep-alive>

    <Footer />

  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
<style lang="scss" scoped>
#app{
  font-size: 12px;
  white-space: nowrap;
}
</style>
