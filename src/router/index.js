import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Session from '@/pages/session/Session'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import Contactor from '@/pages/contactor/Contactor'
import Test from '@/pages/test/Test'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {
        title: '测试'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录',
        keepAlive: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: '注册',
        keepAlive: false
      }
    },
    {
      path: '/',
      name: 'session',
      component: Session,
      props: true,
      meta: {
        title: '会话',
        keepAlive: true
      }
    },
    {
      path: '/contactor',
      name: 'contactor',
      component: Contactor,
      meta: {
        title: '通讯录（好友列表）',
        keepAlive: true
      }
    },
    {
      path: '/404',
      name: '404',
      component: {template: '<h1 class="fs-30 txt-bold">404 Not Found</h1>'},
      meta: {
        title: '404',
        keepAlive: false
      }
    }
  ]
})

const whiteList = ['/404', '/login', '/register']

router.beforeEach((to, from, next) => {
  let routes = router.options.routes
  if (routes.find(ob => ob.path === to.path)) {
    if (!store.state.isLogin) {
      if (whiteList.find(str => str === to.path)) {
        next()
      } else {
        next('/login')
      }
    } else {
      next()
    }
  } else {
    next('/404')
  }
  // next()
})

export default router
