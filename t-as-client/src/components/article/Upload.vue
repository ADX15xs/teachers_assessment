<template>
  <div id="upload">
    <h1 class="hid">{{ msg }}</h1>
    <router-view/>
  </div> 
</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
      msg: 'Upload',
      title: '我的上传信息列表',
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
