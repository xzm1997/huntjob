<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiper"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommend='recommend'></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiper: [],
      iconList: [],
      recommend: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.recommend = data.recommendList
        this.swiper = data.swiperList
        this.iconList = data.iconList
      }
      // console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
