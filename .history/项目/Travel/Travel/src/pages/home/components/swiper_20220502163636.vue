<template>
  <swiper>
    <swiper-slide>
      <img src="https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF" />
    </swiper-slide>
    <swiper-slide>
      <img src="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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

</style>
