<template>
  <div>
    <div class="item"
      v-for="(item, index) of list"
      :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>

</style>
