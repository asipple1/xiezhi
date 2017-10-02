<template>
  <div id="gify">
    <form class="" v-on:submit.prevent="fetchData">
      <input type="text" class="search" v-model="searchKey"/>
    </form>
    <div class='grid' v-for='gif in gify'>
      <img class='grid-item' v-bind:src="gif.images.original.url">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  const gifyApiUrl = 'http://api.giphy.com/v1/gifs/search?q='
  const gifyApiKey = '&api_key=S2yXMMc8VI8qHZNdR2PWH086Ff8fI52w&limit=5'

  export default {
    name: 'Gify',

    data () {
      return {
        searchKey: '',
        gify: {}
      }
    },
    // created () {
    //   this.fetchData()
    // },
    watch: {
      searchKey: function (val, oldVal) {
        setTimeout(() => this.fetchData(val), 1000)
      }
    },
    methods: {
      async fetchData (evt) {
        let resp = await axios.get(gifyApiUrl + evt + gifyApiKey)
        this.gify = resp.data.data
      }
    }
  }
</script>
