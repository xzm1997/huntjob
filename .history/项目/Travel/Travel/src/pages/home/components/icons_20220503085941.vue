<template>
  <div class="icons">
    <div class="icon">
      <img src="https://img0.baidu.com/it/u=2926715223,1445444764&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" />
      <p>热门景点</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
  .icons
    overflow:hidden
    height:0
    padding-bottom:50%
    background:green
    .icon
      float:left
      width:25%
      padding-bottom: 25%
      background:red
</style>
