import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '上海'
  },
  actions: {
    changeCity (ctx, city) {
      console.log(ctx, city)
    }
  },
  mutations: {
    changeCity (state, city) {
      
    }
  }
})
