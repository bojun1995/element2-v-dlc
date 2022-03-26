import VirtualizedSelect from './VirtualizedSelect'

const components = [VirtualizedSelect]

const install = function (Vue) {
	// 遍历注册全局组件
	components.forEach((component) => {
		Vue.component(component.name, component)
	})
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}
export default {
	install,
	VirtualizedSelect,
}
