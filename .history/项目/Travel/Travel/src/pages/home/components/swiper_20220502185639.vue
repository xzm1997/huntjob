<template>
  <div class="wrapper">
    <swiper>
      <swiper-slide>
        <img class="swiper-img" src="https://t7.baidu.com/it/u=3208306980,708281834&fm=193&f=GIF" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="https://t7.baidu.com/it/u=965271672,387797424&fm=193&f=GIF" />
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
      swiperOption: {
        pagination: '.swiper-pagination'
      }
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
    background: #dgs
    .swiper-img
      width:100%
</style>
