import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeDetail from '../views/RecipeDetail.vue'
import Classes from '../views/Classes.vue'
import ClassDetail from '../views/ClassDetail.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import ClassList from '../views/ClassList.vue'
import AllTrainers from '../views/AllTrainers.vue'
import TrainerDetail from '../views/TrainerDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipes',
      name: 'recipe',
      component: RecipeDetail
    },
    {
      path: '/classes',
      name: 'class',
      component: Classes
    },
    {
      path: '/class/:id',
      name: 'classDetail',
      component: ClassDetail
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/class/list/:ClassId',
      name: 'classList',
      component: ClassList
    },
    {
      path: '/trainers',
      name: 'trainer',
      component: AllTrainers
    },
    {
      path:'/trainer/:TrainerId',
      name: 'trainerDetail',
      component: TrainerDetail
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.name === 'login' && localStorage.access_token) {
    next({ name: 'home'})
  } else {
    next()
  }
})

export default router
