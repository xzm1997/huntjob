<template>
  <div>
    <div class="header-abs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </div>
    <div class="header-fixed"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader'
}
</script>

<style lang="stylus" scoped>
  .header-abs
    position absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    background: rgba(0,0,0,.8)
  .header-abs-back
    color: #fff
    font-size: .4rem
</style>
