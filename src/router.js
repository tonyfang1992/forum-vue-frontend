import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import SignIn from './views/SignIn.vue'
import Restaurants from './views/Restaurants.vue' // 一定會經過的，直接載入

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/restaurants'
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: () => import('./views/SignUp.vue')
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/restaurants/feeds',
      name: 'restaurants-feeds',
      component: () => import('./views/RestaurantsFeeds.vue')
    },
    {
      path: '/restaurants/top',
      name: 'restaurants-tops',
      component: () => import('./views/RestaurantsTop.vue')
    }, {
      path: '/restaurants/:id/dashboard',
      name: 'dashboard',
      component: () => import('./views/dashboard.vue')
    },
    {
      path: '/restaurants/:id',
      name: 'restaurant',
      component: () => import('./views/Restaurant.vue')
    },
    {
      path: '/users/top',
      name: 'users-top',
      component: () => import('./views/UsersTop.vue')
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import('./views/User.vue')
    },
    {
      path: '/admin',
      exact: true,
      redirect: '/admin/restaurants'
    }, {
      path: '/admin/restaurants',
      name: 'admin-restaurants',
      component: () => import('./views/AdminRestaurants.vue')
    },
    {
      path: '/admin/restaurants/:id',
      name: 'admin-restaurant',
      component: () => import('./views/AdminRestaurant.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})