import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入编辑器元素组件
import './components/editorEle/index'
// 引入elementUi
import './components/elementUi/index'
import 'element-ui/lib/theme-chalk/index.css';
// 引入基础样式
import './style/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
