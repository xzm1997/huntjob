<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content">
      <ul>
        <li v-for="item of list" :key="item.name">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(function () {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles'
  .search
    padding: 0 .1rem
    height: .72rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      height: .62rem
      line-height: .62rem
      width: 100%
      text-align: center
      border-radius: .06rem
      color: #666
      padding 0 .1rem
  .search-content
    z-index: 1
    overflow hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background-color: #ada
</style>
