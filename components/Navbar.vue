<template>
  <div class="header">
      <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
          <div class="flex-1 flex justify-between items-center">
						<nuxt-link to="/">
              <Logo />
						</nuxt-link>
					</div>

					<button @click="toggleNav" class="cursor-pointer lg:hidden block">
						<svg width=32 height=32 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>

					<div v-bind:class="(navHidden)? 'hidden': 'block'" class="lg:flex lg:items-center lg:w-auto w-full">
						<nav>
							<ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
								<li><nuxt-link class="nav-link" to="/about">About</nuxt-link></li>
								<li><nuxt-link class="nav-link" to="/joke/programming">Programming Joke</nuxt-link></li>
								<li><nuxt-link class="nav-link" to="/joke/misc">Misc Joke</nuxt-link></li>
								<li><nuxt-link class="nav-link" to="/joke/spooky">Scary Joke</nuxt-link></li>
								<li><nuxt-link class="nav-link" to="/joke/dark">Dark Joke</nuxt-link></li>
								<li><nuxt-link class="nav-link" to="/joke/any">Random Joke</nuxt-link></li>
							</ul>
						</nav>
					</div>

      </header>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import Logo from './Logo.vue'

export default Vue.extend({
		name: 'Navbar',

		components:{
			Logo
		},
		
		data(){
			return{
				navHidden: true
			}
		},

		methods: {
			toggleNav(){
				this.navHidden = ((this.navHidden)? false: true)
			}
		}
})
</script>

<style>
	.nav-link{
		@apply py-3 px-0 block border-b-2 border-transparent mb-2;

		@media (min-width:1024px) {
			padding: 1rem;
		}
	}

	.nav-link:hover{
		@apply text-indigo-400
	}

	.nuxt-link-exact-active{
		@apply border-indigo-400
	}

</style>