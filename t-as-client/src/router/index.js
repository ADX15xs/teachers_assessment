import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import User from '@/components/article/User'
import Upload from '@/components/article/Upload'
import Checking from '@/components/article/Checking'
import Default from '@/components/article/Default'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {path: '/', name: 'Default', component: Default},
        {path: '/user', name: 'User', component: User},
        {path: '/upload', name: 'Upload', component: Upload},
        {path: '/checking', name: 'Checking', component: Checking}
      ]
    },
    
  ]
})
