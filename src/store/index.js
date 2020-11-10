import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 此區塊是唯讀 無法動
  state: {
    // 放購物車的東西
    items: [],
  },
  mutations: {
    // state 代表上面的 state
    // data 代表傳入的資料
    addCart(state, data) {
      state.items.push(data)
    },
    delCart(state, index) {
      state.items.splice(index, 1)
    },
  },
  actions: {},
  modules: {},
})
