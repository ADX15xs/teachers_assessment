<template>
  <div id="user">
    <h1 class="hid">{{ msg }}</h1>
    <h2>我的提交记录</h2>
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
    this.$router.push('user/ul-msg');
    this.$emit('setTitle', this.title);
  }
}
</script>

<style scoped>

</style>
