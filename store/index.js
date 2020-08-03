import Vue from 'vue'
import Vuex from 'vuex'
import test from './vuex'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    modules: {
      test,
    },
  })
}
