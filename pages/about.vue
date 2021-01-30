<template>
	<div>
		<div class="max-w-3xl rounded-lg mx-auto my-16 py-16 shadow-md bg-gray-200 text-center">
			<h1 class="text-3xl text-black font-medium">About</h1>
			<p class="text-2xl text-gray-500 font-medium">Get all the corny jokes you would ever want, here!</p>

			<p class="text-xl text-blue-700 font-medium mx-4 mt-4 text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nulla voluptatum inventore animi necessitatibus optio beatae expedita esse accusamus ea laboriosam voluptatem quos, aliquam, atque eum maxime facilis iure sunt.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptate totam doloremque temporibus placeat eaque neque perspiciatis exercitationem amet libero. Maiores mollitia magnam qui accusantium consequuntur magni at quae ipsam.
			</p>
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
 