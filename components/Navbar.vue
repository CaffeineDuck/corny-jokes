<template>
  <div class="header">
      <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
          <div class="flex-1 flex justify-between items-center">
						<nuxt-link to="/">
              <svg width="36" height="34" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
							</svg>
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
								<li><nuxt-link class="nav-link" to="/joke/bad-jokes">Bad Jokes</nuxt-link></li>
								<li><nuxt-link class="nav-link" to="/joke/dad-jokes">Dad Jokes</nuxt-link></li>
								<li><nuxt-link class="nav-link" to="/joke/anti-jokes">Anti Jokes</nuxt-link></li>
								<li><nuxt-link class="nav-link" to="/joke/random-joke">Random Joke</nuxt-link></li>
							</ul>
						</nav>
					</div>

      </header>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
		name: 'Navbar',
		
		data(){
			return{
				navHidden: true
			}
		},

		methods: {
			toggleNav(){
				console.log(this.navHidden)
				this.navHidden = ((this.navHidden)? false: true)
				console.log(this.navHidden)
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