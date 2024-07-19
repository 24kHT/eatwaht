import Vue from 'vue'
import Vuex from 'vuex'
import pieInfo from './modules/pieInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    food (state) {
      return state.pieInfo.food
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pieInfo
  }
})
