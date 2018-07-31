// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment, faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faComment, faHeart, faShareSquare, faSearch, faStar, faTimes])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
