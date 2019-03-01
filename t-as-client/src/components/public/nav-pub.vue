<template>
  <div class="nav-pub">
    <h1 class="hid">{{ msg }}</h1>
    <nav class="nav-transversal">
      <ul>
        <li v-for="(nav, index) in navs" :key="index" @click="setNavAct(nav['menu'])">
          <router-link :to="nav['url']">
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
        {fa:'free-code-camp', link:'首页', url:'/', menu:[
          {fa:'free-code-camp', link:'首页001'},
          {fa:'free-code-camp', link:'首页002'}
        ]},
        {fa:'cloud-upload', link:'上传', url:'/upload', menu:[
          {fa:'cloud-upload', link:'上传001'},
          {fa:'cloud-upload', link:'上传002'},
          {fa:'cloud-upload', link:'上传003'}
        ]},
        {fa:'check-square-o', link:'审核中', url:'/checking', menu:[
          {fa:'check-square-o', link:'审核001'},
          {fa:'check-square-o', link:'审核002'},
          {fa:'check-square-o', link:'审核003'},
          {fa:'check-square-o', link:'审核004'}
        ]},
        {fa:'th-list', link:'我的提交', url:'/user', menu:[
          {fa:'th-list', link:'提交001'},
          {fa:'th-list', link:'提交002'},
          {fa:'th-list', link:'提交003'},
          {fa:'th-list', link:'提交004'},
          {fa:'th-list', link:'提交005'}
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
