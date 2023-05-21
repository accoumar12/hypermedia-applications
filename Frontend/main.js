import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './TheHeader.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue'
library.add(
  fas
);
Vue.defineComponent('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('BIcon', BIcon)
Vue.component('BIconHouseDoor', BIconHouseDoor)

Vue.config.productionTip =false



new Vue({
    render: h =>h(App),
}).$mount('#app')