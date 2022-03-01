import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
//import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import {newAxios} from './AxiosInstance'
import { mdiCashMultiple } from '@mdi/js'
//import VNum from "v3-num";

Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
//Vue.use(BootstrapVueIcons);
Vue.use(mdiCashMultiple);
Vue.prototype.$http =newAxios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
