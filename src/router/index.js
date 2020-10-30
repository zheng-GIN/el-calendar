import Vue from 'vue'
import VueRouter from 'vue-router'
import calendar from '../views/calendar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'calendar',
    component: calendar
  },
  
]

const router = new VueRouter({
  routes
})

export default router
