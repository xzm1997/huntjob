<template>
  <div class="wrapper">
    <swiper>
    <swiper-slide>
      <img class="swiper-img" src="https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF" />
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    width: 100%
    height:0
    padding-bottom:31.25%
    .swiper-img
      width:100%
      height:15%
</style>
