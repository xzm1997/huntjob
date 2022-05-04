<template>
  <div>
    <div class="area">
      <div class="title" border-topbottom>当前城市</div>
    </div>
    <div class="area">
      <div class="title" border-topbottom>热门城市</div>
    </div>
    <div class="area">
      <div class="title" border-topbottom>A</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="stylus" scoped>
  .title
    line-height: .4rem
    background: #eee
    padding: .2rem
    color: #666
</style>
