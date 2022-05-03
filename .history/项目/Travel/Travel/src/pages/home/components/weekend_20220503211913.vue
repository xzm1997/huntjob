<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) of recommendList" :key="index">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF',
        title: '大连花果山海洋世界',
        desc: '美丽的海洋世界景点'
      }, {
        id: '0002',
        imgUrl: 'https://t7.baidu.com/it/u=4080826490,615918710&fm=193&f=GIF',
        title: '大连花果山海洋世界',
        desc: '美丽的海洋世界景点'
      }, {
        id: '0003',
        imgUrl: 'https://t7.baidu.com/it/u=3713375227,571533122&fm=193&f=GIF',
        title: '大连花果山海洋世界',
        desc: '美丽的海洋世界景点'
      }, {
        id: '0004',
        imgUrl: 'https://t7.baidu.com/it/u=801209673,1770377204&fm=193&f=GIF',
        title: '大连花果山海洋世界',
        desc: '美丽的海洋世界景点'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top:.2rem
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
