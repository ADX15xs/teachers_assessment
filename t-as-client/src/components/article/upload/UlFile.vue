<template>
  <div id="UlFile">
    <h1 class="hid">{{ msg }}</h1>
    <h2>上传附件</h2>
    <h3>请选择您的附件文件</h3>
    <input type="file" name="ulFile" id="ulFile">
  </div>
</template>

<script>
export default {
  name: 'UlFile',
  data() {
    return {
      msg: 'UlFile'
    }
  }
}
</script>

<style scoped>

</style>
