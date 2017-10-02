<template>
  <div id="gify">
    <form class="" v-on:submit.prevent="fetchData">
      <input type="text" class="search" v-model="searchKey" placeholder="Search Something Funny!" autofocus/>
    </form>
    <div class='grid'>
      <img v-for='gif in gify' class='grid-item' v-bind:src="gif.images.original.url">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  const gifyApiUrl = 'http://api.giphy.com/v1/gifs/search?q='
  const gifyApiKey = '&api_key=S2yXMMc8VI8qHZNdR2PWH086Ff8fI52w&limit=16'

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

<style lang="scss">

$colors: red, orange, yellow, green, blue, purple;
$repeat: 20;

@for $i from 1 through $repeat {
    .grid-item:nth-child(#{length($colors)}n+#{$i}) {
        background: lighten(nth($colors, random(length($colors))), 20%);
    }
}

body {
  margin: 0;
}
  .search {
    color: #999;
    display: inline-block;
    font: inherit;
    font-size: 4em;
    height: 90px;
    outline: none;
    padding: 20px;
    transition: border-color 500ms ease;
    width: 100%;
  }
  .grid {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    .grid-item {
      width: 350px;
      flex: 1;
      max-height: 350px;
      min-height: 350px;
    }
  }
</style>
