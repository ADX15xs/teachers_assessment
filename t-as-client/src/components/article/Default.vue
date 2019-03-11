<template>
  <div id="default">
    <h1 class="hid">{{ msg }}</h1>
    <h2>首页</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Default',
  data () {
    return {
      msg: 'Default',
      title: '首页的子组件',
      data: []
    }
  },
  mounted(){
    this.$router.push('/main/last-msg');
    this.$emit('setTitle', this.title);
  }
}
</script>

<style scoped>
</style>
