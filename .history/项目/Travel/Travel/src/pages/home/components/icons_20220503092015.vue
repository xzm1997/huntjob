<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content"
        src="https://img0.baidu.com/it/u=2926715223,1445444764&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" />
      </div>
      <p class="icon-desc">热门景点</p>
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
      height:0
      width:25%
      padding-bottom: 25%
      background:red
      .icon-img
        position:absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing:border-box
        padding:.1rem
        background:blue
        .icon-img-content
          position:absolute
          display: block
          margin:0 auto
      // .icon-desc
      //   position:absolute
      //   left:0
      //   right:0
      //   bottom:0
      //   height: .44rem
      //   line-height:.44rem
      //   color:#333
</style>
