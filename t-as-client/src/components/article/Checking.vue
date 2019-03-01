<template>
  <div id="checking">
    <h1 class="hid">{{ msg }}</h1>
    <h2>审核中</h2>
  </div>
</template>

<script>
export default {
  name: 'Checking',
  data () {
    return {
      msg: 'Checking',
      title: '正在审核中的信息列表',
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
