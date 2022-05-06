<template>
  <div>
    <div class="item"
      v-for="(item, index) of list"
      :key="index">
      <div class="item-title" border-bottom>
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children">
        <detail-list></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
import Detail from '../Detail.vue'
export default {
  name: 'DetailList',
    Detail
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position relative
    left .06rem
    top .06rem
    display inline-block
    width .36rem
    height .36rem
    background #17f
    margin-right: .1rem
    background-size .4rem 3rem
    border-radius: .22rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
</style>
