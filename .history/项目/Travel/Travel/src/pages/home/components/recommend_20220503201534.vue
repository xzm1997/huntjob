<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" src='https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF' />
        </div>
        <div class="item-info">
          <p class="item-title"></p>
          <p class="item-desc"></p>
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
    background: red
</style>
