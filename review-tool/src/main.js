/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */

import Vue from 'vue'
import App from './App'
import store from './vuex/store.js'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  store: store
})
