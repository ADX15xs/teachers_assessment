<template>
  <div id="LastMsg">
    <h1 class="hid">{{ msg }}</h1>
    <h2>最新消息组件</h2>
  </div>
</template>

<script>
export default {
  name: 'LastMsg',
  data() {
    return {
      msg: 'LastMsg'
    }
  }
}
</script>

<style scoped>

</style>
