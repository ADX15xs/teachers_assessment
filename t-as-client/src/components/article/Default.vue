<template>
  <div id="default">
    <h1 class="hid">{{ msg }}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Default',
  data () {
    return {
      msg: 'Default',
      title: '首页'
    }
  },
  mounted(){
    this.$emit('setTitle', this.title);
  }
}
</script>

<style scoped>
</style>
