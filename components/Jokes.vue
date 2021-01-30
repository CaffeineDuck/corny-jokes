<template>
  <div>
    <h1 class="text-center font-bold text-4xl pt-10">{{ type }} Joke</h1>
    <div
      class="max-w-3xl rounded-lg lg:mx-auto lg:my-16 lg:py-16 py-8 lg:shadow-md bg-gray-200 text-center mx-4"
    >
      <!-- <h1 class="text-3xl font-bold text-blue-400">{{ title }}</h1> -->
      <p class="text-2xl">{{ initial }}</p>

      <div class="flex text-center">
        <toggle-button class="justify-center content-center mx-auto py-4" @toggleButton="togglePunch" />
      </div>

      <p v-bind:class="punchHidden ? 'hidden' : 'block'">{{ punch }}</p>
    </div>

		<div class="mx-auto my-16 text-center">
		   <button @click = "$emit('newJoke')" class="inline-block p-3 text-center text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none">
          <svg width=36 height=36 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
					</svg>
        </button>
		</div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ToggleButton from "./ToggleButton.vue";

export default Vue.extend({
  name: "Jokes",

  components: {
    ToggleButton,
  },

  props: {
    type: String,
    initial: String,
    punch: String,
  },

  data() {
    return {
			punchHidden: true,
			joke: Object,
		};
		
	},
	
  methods: {
    togglePunch() {
      this.punchHidden = !this.punchHidden;
		}
  },
});
</script>

