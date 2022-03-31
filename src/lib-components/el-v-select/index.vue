<template>
	<div>
		<div>
			<input type="text" class="input" />
		</div>
		<div :style="`height: ${dropDownHeight}px;`" @scroll="onScroll" class="drop-down-box">
			<div :style="`height: ${scrollHeight}px`">
				<div :style="`transform: translateY(${scrollOffsetY}px); `">
					<div v-for="item in showItemList" :key="item.id" :style="`height: ${itemHeight}px; line-height: ${itemHeight}px`" class="drop-down-item">
						<span>{{ item.label }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ElVSelect',
	props: {
		data: Array,
		dropDownHeight: {
			type: Number,
			default: 200,
		},
		itemHeight: {
			type: Number,
			default: 50,
		},
	},
	data() {
		return {
			lastScrollTime: '', // 上次执行滚动事件的时刻
			scrollHeight: '', // 列表总高度
			showItemList: [], // 展示列表
			scrollOffsetY: '', // 动态偏移量
			showItemNum: '', // 显示的个数
		}
	},
	mounted() {
		// 计算总高度
		this.scrollHeight = this.itemHeight * this.data.length
		// 计算可视区域能展示的个数 这里可以随机多加几个让滚动有个临界区间，避免向下滑动时元素直接替换
		this.showItemNum = this.dropDownHeight / this.itemHeight + 4
		this.lastScrollTime = new Date().getTime()
		// 默认展示
		this.showItemList = this.data.slice(0, this.showItemNum)
	},
	methods: {
		onScroll(e) {
			let curTime = new Date().getTime()
      console.log('do scroll')
			this.scrollOffsetY = e.target.scrollTop - (e.target.scrollTop % this.itemHeight)

			let startIdx = Math.floor(e.target.scrollTop / this.itemHeight)
			let endIdx = Math.floor(e.target.scrollTop / this.itemHeight) + this.showItemNum
			this.showItemList = this.data.slice(startIdx, endIdx)

			this.lastScrollTime = new Date().getTime()
		},
	},
}
</script>

<style scoped>
.input {
	width: 290px;
	margin-bottom: 10px;
}
.drop-down-box {
	overflow-y: scroll;
	width: 300px;
	border: 1px solid #000000;
}
.drop-down-item {
}
</style>
