import Vue from 'vue'
import App from './App.vue'
import Element2VirtualizedDlc from '../packages'

Vue.config.productionTip = false

Vue.use(Element2VirtualizedDlc)

new Vue({
	render: (h) => h(App),
}).$mount('#app')
