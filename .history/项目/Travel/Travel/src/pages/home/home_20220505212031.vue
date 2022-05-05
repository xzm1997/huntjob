<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiper"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommend='recommendList'></home-recommend>
    <home-weekend :weekendList='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
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
      swiper: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // this.city = data.city
        this.recommendList = data.recommendList
        this.swiper = data.swiperList
        this.iconList = data.iconList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    console.log('mounted')
    this.getHomeInfo()
  },
  activated () {
    console.log('activated')
  }
}
</script>

<style>

</style>
