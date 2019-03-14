import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import User from '@/components/article/User'
  import UlMsg from '@/components/article/user/UlMsg'
import Upload from '@/components/article/Upload'
  import CheckInfo from '@/components/article/upload/CheckInfo'
  import UlExcel from '@/components/article/upload/UlExcel'
  import UlFile from '@/components/article/upload/UlFile'
import Checking from '@/components/article/Checking'
  import Wait from '@/components/article/checking/Wait'
import Default from '@/components/article/Default'
  import LastMsg from '@/components/article/default/LastMsg'
  import DlModel from '@/components/article/default/DlModel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {path: '/main', name: 'Default', component: Default,
          children: [
            {path: 'last-msg', name: 'LastMsg', component: LastMsg},
            {path: 'dl-model', name: 'DlModel', component: DlModel}
          ]
        },
        {path: '/upload', name: 'Upload', component: Upload,
          children: [
            {path: 'check-info', name: 'CheckInfo', component: CheckInfo},
            {path: 'ul-excel', name: 'UlExcel', component: UlExcel},
            {path: 'ul-file', name: 'UlFile', component: UlFile}
          ]
        },
        {path: '/checking', name: 'Checking', component: Checking,
          children: [
            {path: 'wait', name: 'Wait', component: Wait}
          ]
        },
        {path: '/user', name: 'User', component: User,
          children: [
            {path: 'ul-msg', name: 'UlMsg', component: UlMsg}
          ]
        }
      ]
    },
    
  ]
})
