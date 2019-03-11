<template>
  <div id="nav-act-pub">
    <h1 class="hid">{{ msg }}</h1>
    <nav class="nav-vertical">
      <ul>
        <li v-for="(nav, index) in navs" :key="index">
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
  }
}
</script>

<style scoped>

</style>

