<template>
  <city-header></city-header>
  <city-search></city-search>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>

</style>
