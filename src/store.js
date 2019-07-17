import Vue from 'vue'
import Vuex from 'vuex'
import { actions, getters, mutations, state } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})
