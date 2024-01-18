import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '../views/LoginView.vue'
import TasksView from '../views/TasksView.vue'
import RegisterView from '../views/RegisterView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
  {    
      path: '/tasks',
      name: 'tasks',
      component: TasksView,
  },
  {
      path: '/register',
      name: 'register',
      component: RegisterView,
  },
  ]
})
