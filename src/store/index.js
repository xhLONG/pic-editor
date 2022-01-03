import Vue from 'vue'
import Vuex from 'vuex'
import data from './data'
import editor from './editor'
import setting from './settting'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      data,
      editor,
      setting,
  }
})
