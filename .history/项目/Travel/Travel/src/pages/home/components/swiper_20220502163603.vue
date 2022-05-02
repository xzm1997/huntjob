<template>
  <swiper>
    <swiper-slide>
      <img src="https://alifei02.cfp.cn/creative/vcg/800/new/VCG211378978377.jpg" />
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
