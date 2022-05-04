<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) of weekendList" :key="index">
        <div class="item-img-warpper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">
            {{item.desc}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height:.8rem
    background: #ccc
    text-indent:.2rem
  .item-img-wrapper
    overflow hidden
    height: 0
    padding-bottom: 4rem
  .item-img
    width:7.3rem
    height:4rem
    padding:.1rem
  .item-info
    padding:.1rem
    .item-title
      line-height:.54rem
      font-size:.32rem
      ellipsis()
    .item-desc
      line-height:.4rem
      color: #ccc
      ellipsis()
</style>
