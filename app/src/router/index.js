import Vue from 'vue'
import Router from 'vue-router'
import { isLoggedIn } from './helpers/isLoggedIn'
import { UserRoutes } from './routes/UserRoutes'
import { AuthRoutes } from './routes/AuthRoutes'

import SpotifyLogin from '@/components/Auth/Login/Spotify/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', redirect: '/' },
    {
      path: '/',
      name: 'root',
      redirect () {
        return isLoggedIn()
          ? { name: UserRoutes.name }
          : { name: UserRoutes.name }
      }
    },
    UserRoutes,
    AuthRoutes,
    {
      path: '/spotify-login',
      name: 'login.spotify',
      component: SpotifyLogin
    }
  ]
})
