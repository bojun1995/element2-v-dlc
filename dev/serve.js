import Vue from 'vue';
import Dev from './serve.vue';

import ElVSelect from '@/entry.esm';
Vue.use(ElVSelect);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
