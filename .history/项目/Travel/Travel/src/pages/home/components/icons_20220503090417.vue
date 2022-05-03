<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content"
        src="https://img0.baidu.com/it/u=2926715223,1445444764&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" />
      </div>
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
    height: 0
    .icon
      position:relative
      overflow:hidden
      float:left
      width:25%
      padding-bottom: 25%
      background:red
      .icon-img
        position:absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        background:blue
        .icon-img-content
          height:100%
          width:100%
</style>
