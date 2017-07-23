import Vue from 'vue'
import Router from 'vue-router'
import Results from '@/components/Results.vue'
import Band from '@/components/Band.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Results', component: Results },
    { path: '/band/:id', name: 'Band', component: Band }
  ]
})
