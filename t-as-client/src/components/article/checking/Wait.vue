<template>
  <div id="Wait">
    <h1 class="hid">{{ msg }}</h1>
    <h2>等待审核组件</h2>
  </div>
</template>

<script>
export default {
  name: 'Wait',
  data() {
    return {
      msg: 'Wait'
    }
  }
}
</script>

<style scoped>

</style>
