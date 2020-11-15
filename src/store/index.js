import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: []
  },

  mutations: {
    updateOrder(state, product) {
      const index = state.orderList.findIndex((e)=> e.id == product.id);
      if(index==-1) {
        state.orderList.push({
          id: product.id,
          name: product.name,
          pricePerUnit: product.price,
          quantity: 1,
        })
      }
      else{
        state.orderList[index].quantity++;
      }
    },

    removeOrder(state, id){
      const index = state.orderList.findIndex((e)=> e.id == id);

      if(index != -1) {
        state.orderList.splice(index,1)
      }
    },

    clearOrderList (state) {
      state.orderList = []
    }
  },

  actions: {
    addOrder({ commit }, product) {
      commit('updateOrder', product)
    },

    removeOrder({ commit}, id) {
        commit('removeOrder', id)
    }
  },
  
  modules: {
  }
})
