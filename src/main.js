import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
//导入全局样式
import './assets/css/globat.css'
import './assets/fonts/iconfont.css'
import TreeTable from 'vue-table-with-tree-grid'






Vue.component('tree-table',TreeTable)



Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
