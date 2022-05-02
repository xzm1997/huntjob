<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '../../'
  .header
    display:flex
    line-height: .86rem
    background: #00bcd4
    color:#fff
    .header-left
      width: .64rem
      float:left
      .back-icon
        text-align: center
        font-size:.4rem
    .header-input
      flex:1
      background: #fff
      border-radius:.1rem
      margin-left: .2rem
      // height:.64rem
      line-height:.64rem
      margin-top:.12rem
      margin-bottom:.12rem
      color:#ccc
      padding-left:.2rem
    .header-right
      width:1.24rem
      float:right
      text-align:center
      .arrow-icon
      margin-left:.24rem
        font-size:.24rem
</style>
