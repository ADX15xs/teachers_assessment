<template>
  <div id="dialog-pub">
    <h1 class="hid">{{ msg }}</h1>
    <div class="dia-con" :html="setHtml"></div>
  </div>
</template>

<script>
import bus from '@/assets/eventBus'

export default {
  name: 'DialogPub',
  data() {
    return{
      msg: 'DialogPub',
      setHtml: ``
    }
  },
  mounted(){
    var self = this;
    bus.$on('setDia',function(sHtml){
      self.setHtml = sHtml;
    })
  }
}
</script>

<style scoped>

</style>

