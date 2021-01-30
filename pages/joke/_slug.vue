<template>
    <div>
        <Jokes @newJoke="newJoke" v-bind:type="joke.category" v-bind:initial="joke.setup" v-bind:punch="joke.delivery" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Jokes from '~/components/Jokes.vue'

const baseUrl = 'https://v2.jokeapi.dev/joke/'
const defualtJoke = {
    category: 'Loading',
    setup: 'Doot Doot',
    delivery: '........'
}

export default Vue.extend({
    name: 'Joke-Slug',

    components:{
        Jokes
    },

    data(){
        return{
            joke: defualtJoke
        }
    },
    
    created: function() {
        this.$axios
        .get(baseUrl + this.$route.params.slug + '?type=twopart')
        .then(res => {
        this.joke = res.data;
        })
        console.log(this.joke)
    },
    
    methods:{
        newJoke(){
            //Reset the value of joke
            this.joke = defualtJoke

            //Get new joke
            this.$axios
            .get(baseUrl + this.$route.params.slug)
            .then(res => {
            this.joke = res.data;
            })
            console.log(this.joke)
        }
    }
})
</script>