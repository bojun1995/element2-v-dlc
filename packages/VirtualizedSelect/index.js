import VirtualizedSelect from './src/index.vue'
VirtualizedSelect.install = function (Vue) {
	Vue.component(VirtualizedSelect.name, VirtualizedSelect)
}
export default VirtualizedSelect
