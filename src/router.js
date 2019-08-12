import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Projects from './views/Projects'
import Team from './views/Team'
import Table from './views/Table'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    }

  ]
})
