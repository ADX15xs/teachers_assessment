<template>
  <div class="nav-pub">
    <h1 class="hid">{{ msg }}</h1>
    <nav class="nav-transversal">
      <ul>
        <li v-for="(nav, index) in navs" :key="index" @click="setNavAct(nav['menu'])">
          <router-link :to="nav['menu'][0]['url']">
            <i :class="`fa fa-${nav['fa']} fa-fw`"></i> {{ nav['link'] }}</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import bus from '@/assets/eventBus';

export default {
  name: 'nav-pub',
  data () {
    return {
      msg: 'IndexPage',
      navs: [
        {fa:'free-code-camp', link:'首页', url:'/main', menu:[
          {fa:'free-code-camp', link:'最新消息', url:'/main/last-msg'},
          {fa:'free-code-camp', link:'下载模板', url:'/main/dl-model'}
        ]},
        {fa:'cloud-upload', link:'上传', url:'/upload', menu:[
          {fa:'cloud-upload', link:'确认信息', url:'/upload/check-info'},
          {fa:'cloud-upload', link:'上传表格', url:'/upload/ul-excel'}
        ]},
        {fa:'check-square-o', link:'审核中', url:'/checking', menu:[
          {fa:'check-square-o', link:'待审核', url:'/checking/wait'}
        ]},
        {fa:'th-list', link:'我的提交', url:'/user', menu:[
          {fa:'th-list', link:'信息列表', url:'/user/ul-msg'}
        ]}
      ],
    }
  },
  methods: {
    setNavAct: function(jsonMenu){
      bus.$emit('setNavAct',jsonMenu);
    }
  }
}
</script>

<style scoped>
.nav-transversal{height:24px;}
.nav-transversal ul{font-size:0;}
.nav-transversal li{display:inline-block; font-size:18px; line-height:24px;}
</style>
