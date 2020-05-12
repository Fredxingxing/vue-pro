import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
console.log('vuex strict',debug)
export default new Vuex.Store({
  modules:{
    home
  },
  strict:debug,
  // plugins: debug ? [createLogger()] : []
})
