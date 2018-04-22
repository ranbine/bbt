import Vue from 'vue'
import Router from 'vue-router'
import mIndex from '@/components/Index.vue'
import Knowledge from '@/components/Knowledge'
import Activity from '@/components/Activity'
import Home from '@/components/Home'
import Write from '@/components/Write'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Forgetpwd from '@/components/Forgetpwd'
import User from '@/components/User'

import userinfo from '@/components/user/userinfo'
import resetpwd from '@/components/user/resetpwd'
import mynote from '@/components/user/mynote'
import mycollection from '@/components/user/mycollection'
import myInfo from '@/components/user/myInfo'
import mytask from '@/components/user/mytask'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: mIndex
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/write',
      name: 'write',
      component: Write,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgetpwd',
      name: 'forgetpwd',
      component: Forgetpwd
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'userinfo',
          name: 'userinfo',
          component: userinfo
        },
        {
          path: 'resetpwd',
          name: 'resetpwd',
          component: resetpwd
        },
        {
          path: 'mynote',
          name: 'mynote',
          component: mynote
        },
        {
          path: 'mycollection',
          name: 'mycollection',
          component: mycollection
        },
        {
          path: 'myInfo',
          name: 'myInfo',
          component: myInfo
        },
        {
          path: 'mytask',
          name: 'mytask',
          component: mytask
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router