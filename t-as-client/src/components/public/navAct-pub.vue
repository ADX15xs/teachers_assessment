<template>
  <div id="nav-act-pub">
    <h1 class="hid">{{ msg }}</h1>
    <nav class="nav-vertical">
      <ul>
        <li v-for="(nav, index) in navs" :key="index" :class="activeIndex==index? true: false" @click="handleSelect(index)">
          <router-link :to="nav['url']">
            <i :class="`fa fa-${nav['fa']} fa-fw`"></i> {{ nav['link'] }}</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import bus from '@/assets/eventBus'

export default {
  name: 'NavActPub',
  data() {
    return{
      msg: 'NavActPub',
      activeIndex: 0,
      navs: [
        {fa:'free-code-camp', link:'最新消息', url:'/main/last-msg'},
        {fa:'free-code-camp', link:'下载模板', url:'/main/dl-model'}
      ],
    }
  },
  mounted(){
    var self = this;
    bus.$on('setNavAct',function(menu){
      self.navs = menu;
    })
  },
  methods: {
    handleSelect(index){
      this.activeIndex = index;
    }
  }
}
</script>

<style scoped>
.nav-vertical ul{background-color:rgb(84,92,100); height:100%;}
.nav-vertical li{outline:none; cursor:pointer; height:40px; line-height:40px; font-size:18px;}
.nav-vertical li a{color:#fff; text-decoration:none;}
.nav-vertical li:hover{background-color:rgb(67,74,80);}
.nav-vertical li:hover a{color:rgb(255, 208, 75);}
.nav-vertical li.on a{color:rgb(255, 208, 75);}
</style>

