// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Fullpage from '@/components/Fullpage'
import page1 from '@/components/page1'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    pages: 5,
    bgColor: ['#c09','#c90','#09c','#0c9'],
  },
  methods: {},
  components: {
    Fullpage,
    page1,
  },
  // template: '<App/>'
})
