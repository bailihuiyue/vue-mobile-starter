import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleA = {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      state.count += payload;
    },
    decrement(state, payload) {
      state.count -= payload;
    },
  },
  actions: {},
};

export default new Vuex.Store({
  modules: {
    moduleA,
  },
});
