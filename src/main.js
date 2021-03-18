
import './assets/stylesheet/normalize.css'
import 'amfe-flexible'
import "@/assets/iconfont/iconfont.css";

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Button, Col, Row, Search, Tab, Tabs, Tabbar, TabbarItem, Swipe, SwipeItem, 
  Grid, GridItem, Image as VanImage, Icon, Lazyload, Sticky } from 'vant';

Vue.use(Button).use(Col).use(Row).use(Search).use(Tab).use(Tabs).use(Tabbar)
.use(TabbarItem).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(VanImage)
.use(Icon).use(Lazyload, { lazyComponent: true }).use(Sticky);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
