import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import details from '../views/details.vue'
import personal from '../views/personal.vue'
import education from '../views/education.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:"/details/:id",
      name:"details",
      component:details,
      children:[ {
        path:"personal",
        name:"personal",
        component:personal
      },
      {
        path:"education",
        name:"education",
        component:education
      }]
    },
   
  ]
})

export default router
