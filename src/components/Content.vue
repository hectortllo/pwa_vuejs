<template>
  <Card :places="places"/>
</template>

<script>
import api from './../api'
import Card from './Card'

export default {
  name: 'Content',
  components: {
    Card
  },
  data () {
    return {
      places: []
    }
  },
  created () {
    api.getPlaces()
      .then(places => {
        this.places = places
      })
  }
}
</script>

<style scoped>
</style>