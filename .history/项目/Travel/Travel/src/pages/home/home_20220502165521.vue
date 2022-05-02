<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <p>123</p>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
