import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../views/ListView.vue'
import CreateView from '../views/CreateView.vue'
import UpdateView from '../views/UpdateView.vue'
import DetailsView from '../views/DetailsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: ListView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    path: '/details/:id',
    name: 'details',
    component: DetailsView
  },
  {
    path: '/update/:id',
    name: 'update',
    component: UpdateView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
