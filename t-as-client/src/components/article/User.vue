<template>
  <div id="user">
    <h1 class="hid">{{ msg }}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      msg: 'User',
      title: '我的提交记录列表',
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
