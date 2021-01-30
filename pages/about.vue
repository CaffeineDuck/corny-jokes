<template>
	<div class="shadow-md p-6 flex m-3">
		<div>
			<h1 class="text-3xl text-black font-medium">About</h1>
			<p class="text-2xl text-gray-500 font-medium">Get all the corny jokes you would ever want, here!</p>
			<button @click="countAdd"> haha </button>
			<p>count is {{count}}</p>
		</div>
  	</div>
</template>

<script lang="ts">

import Vue, { PropOptions } from 'vue'
export default Vue.extend({
	name: 'about',

	head() {
		return{
			title: 'About The App',
			meta: [
				{
				hid: 'description',
				name: 'description',
				content: 'best place for corny dad jokes'
				}
			]
		}
	},

	data(){
		return{
			count: 0
		}
	},

	methods: {
		darkMode(){
			localStorage.theme = 'dark'
		},

		countAdd(){
			this.count++
		}
	},
	
})


</script>
 