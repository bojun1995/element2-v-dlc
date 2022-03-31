<template>
	<div id="app">
		<el-v-select :data="cp_options"></el-v-select>
	</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
	name: 'ServeDev',
	data() {
		return {

    }
	},
  computed: {
    cp_options() {
      let ret = []
      for(let i = 0; i < 10000; i++) {
        ret.push({
          label: `label-${i}`,
          value: i,
          id: i,
        })
      }
      return ret
    }
  }
})
</script>
