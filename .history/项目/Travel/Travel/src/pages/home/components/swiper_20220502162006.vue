<template>
  <swiper>
    <swiper-slide>
      <img src="" />
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
