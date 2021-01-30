export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const jokeAPI = $axios.create({})
  
    // Set baseURL to something different
    jokeAPI.setBaseURL('https://v2.jokeapi.dev/')
  
    // Inject to context as $api
    inject('jokeAPI', jokeAPI)
  }