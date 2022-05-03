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
          <button class="item-button">查看详情</button>
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
        imgUrl: 'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF',
        title: '大连花果山海洋世界',
        desc: '美丽的海洋世界景点'
      }, {
        id: '0003',
        imgUrl: 'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF',
        title: '大连花果山海洋世界',
        desc: '美丽的海洋世界景点'
      }, {
        id: '0004',
        imgUrl: 'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF',
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
    padding-bottom: 5rem
  .item-img
    width:7.3rem
    height:3rem
    padding:.1rem
  .item-info
    flex: 1
    min-width:0
    padding:.1rem
    .item-title
      line-height:.54rem
      font-size:.32rem
      ellipsis()
    .item-desc
      line-height:.4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height:.44rem
      margin-top:.16rem
      background #ff9300
      padding: 0 .1rem
      border-radius: .06rem
</style>
