<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom">
        <img class="item-img" src='https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF' />
        <div class="item-info">
          <p class="item-title">大连派出所海洋世界</p>
          <p class="item-desc">
            爱丽丝的回复第四发生
          </p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top:.2rem
    line-height:.8rem
    background: #ccc
    text-indent:.2rem
  .item
    overflow hidden
    display: flex
    height: 1.9rem
    .item-img
      width:1.7rem
      height:1.7rem
      padding:.1rem
    .item-info
      flex: 1
      padding:.1rem
      .item-title
        line-height:.54rem
        font-size:.32rem
      .item-desc
        line-height:.4rem
        color: #ccc
      .item-button
        line-height:.44rem
        margin-top:.16rem
        background #ff9300
        padding: 0 .1rem
        border-radius: .06rem
</style>
