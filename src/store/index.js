import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    login (state, userInfo) {
      state.userInfo = userInfo
    } 
  },
  actions: {
    
  }
})

export default store