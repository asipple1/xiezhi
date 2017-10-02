<template>
  <div id="blog">
    <div class='grid' v-for='blog in blogs'>
      {{ blog }}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  const blogUrl = 'http://great-mongoose.cloudvent.net/blog.json'

  export default {
    name: 'Blog',

    data () {
      return {
        blogs: {}
      }
    },

    created () {
      this.fetchData()
    },

    methods: {
      async fetchData () {
        console.log(this.searchKey)
        let resp = await axios.get(blogUrl)
        this.blogs = resp.data.blog
      }
    }
  }
</script>
