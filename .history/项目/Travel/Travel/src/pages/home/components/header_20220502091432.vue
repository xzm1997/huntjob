<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-input"></div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display:flex
    height: .86rem
    .header-left
      width: .64rem
      float:left
    .header-input
      flex:1
    .header-right
      width:1.24rem
      float:right
