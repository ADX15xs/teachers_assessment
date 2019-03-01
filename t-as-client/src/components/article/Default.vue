<template>
  <div id="default">
    <h1 class="hid">{{ msg }}</h1>
    <h2>首页</h2>
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
    this.$emit('setTitle', this.title);
  }
}
</script>

<style scoped>
</style>
