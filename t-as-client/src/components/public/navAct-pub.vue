<template>
  <div id="nav-act-pub">
    <h1 class="hid">{{ msg }}</h1>
    <nav class="nav-vertical">
      <ul>
        <li v-for="(nav, index) in navs" :key="index">
          <a href="javascript:">
            <i :class="`fa fa-${nav['fa']} fa-fw`"></i> {{ nav['link'] }}</a></li>
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
        {fa:'free-code-camp', link:'首页001'},
        {fa:'free-code-camp', link:'首页002'}
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

