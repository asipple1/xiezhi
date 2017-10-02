<template>
  <div>
    <p>Name: {{ coin.name }}</p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'Coins',

    data () {
      return {
        coin: {}
      }
    },

    created () {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      fetchData () {
        console.log(this.$route)
        axios.get('https://api.coinmarketcap.com/v1/ticker/' + this.$route.params.id + '/')
        .then((resp) => {
          console.log(resp)
          this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>
