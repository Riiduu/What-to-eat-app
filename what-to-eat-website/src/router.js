import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from './screens/HomeScreen.vue'
import SearchScreen from './screens/SearchScreen.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeScreen
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchScreen
  }
  // add more routes here
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router