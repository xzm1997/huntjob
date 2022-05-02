<template>
  <swiper>
    <swiper-slide>
      <img src="https://www.google.com/url?sa=i&url=http%3A%2F%2Ftravel.sina.com%2Farticle%2Ftoutiao%2F2309404214145120639307&psig=AOvVaw3lKYwwKApGBoft9ix8O6Y_&ust=1651566519154000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJigtfGywPcCFQAAAAAdAAAAABAD" />
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
