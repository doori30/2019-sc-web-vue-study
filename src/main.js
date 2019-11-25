import Vue from 'vue'
import App from './App.vue'

/* bootstrap-vue */
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.min.css' 
// 실제 부트스트랩
import 'bootstrap-vue/dist/bootstrap-vue.css'
// 부트스트랩이 사용할 수 있도록 해줌
/* node모듈에서 (정적인)파일을 가져올 때 */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
