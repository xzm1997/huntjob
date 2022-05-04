<template>
  <div class="icons">
    <swiper :pagination="{ clickable: true }">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon"
        v-for="item of page"
        :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content"
            :src='item.imgUrl' />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      // iconList: [{
      //   id: '0001',
      //   imgUrl: 'https://img0.baidu.com/it/u=2926715223,1445444764&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
      //   desc: '景点门票'
      // }, {
      //   id: '0002',
      //   imgUrl: 'https://img1.baidu.com/it/u=2341263617,1405118876&fm=253&fmt=auto&app=138&f=JPEG?w=560&h=400',
      //   desc: '滑雪季'
      // }, {
      //   id: '0003',
      //   imgUrl: 'https://img0.baidu.com/it/u=2926715223,1445444764&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
      //   desc: '景点门票'
      // }, {
      //   id: '0004',
      //   imgUrl: 'https://img1.baidu.com/it/u=2341263617,1405118876&fm=253&fmt=auto&app=138&f=JPEG?w=560&h=400',
      //   desc: '滑雪季'
      // }, {
      //   id: '0005',
      //   imgUrl: 'https://img0.baidu.com/it/u=2926715223,1445444764&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
      //   desc: '景点门票'
      // }, {
      //   id: '0006',
      //   imgUrl: 'https://img1.baidu.com/it/u=2341263617,1405118876&fm=253&fmt=auto&app=138&f=JPEG?w=560&h=400',
      //   desc: '滑雪季'
      // }, {
      //   id: '0007',
      //   imgUrl: 'https://img0.baidu.com/it/u=2926715223,1445444764&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
      //   desc: '景点门票'
      // }, {
      //   id: '0008',
      //   imgUrl: 'https://img1.baidu.com/it/u=2341263617,1405118876&fm=253&fmt=auto&app=138&f=JPEG?w=560&h=400',
      //   desc: '滑雪季'
      // }, {
      //   id: '0009',
      //   imgUrl: 'https://img1.baidu.com/it/u=2341263617,1405118876&fm=253&fmt=auto&app=138&f=JPEG?w=560&h=400',
      //   desc: '滑雪季'
      // }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height:0
    padding-bottom:50%
  .icons
    margin-top:.1rem
    .icon
      position:relative
      overflow:hidden
      float:left
      height:0
      width:25%
      padding-bottom: 25%
      .icon-img
        position:absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing:border-box
        padding:.1rem
        .icon-img-content
          display: block
          margin:0 auto
          height:100%
      .icon-desc
        position:absolute
        left:0
        right:0
        bottom:0
        height: .44rem
        line-height:.44rem
        color:$darkTextColor
        text-align: center
        ellipsis()
</style>
