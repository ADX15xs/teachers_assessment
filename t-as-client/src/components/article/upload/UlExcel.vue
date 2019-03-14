<template>
  <div id="UlExcel">
    <h1 class="hid">{{ msg }}</h1>
    <h2>上传Excel组件</h2>
    <!-- 限制显示的文件类型
      .xls: application/vnd.ms-excel
      .xlsx: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
     -->
    <h3>仅支持“xls”、“xlsx”类型Excel文件</h3>
    <form enctype="multipart/form-data" action="#" method="post">
      <input type="file" name="ulExcel" id="ulExcel" accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
      <input type="submit" value="上传">
    </form>
  </div>
</template>

<script>
export default {
  name: 'UlExcel',
  data() {
    return {
      msg: 'UlExcel'
    }
  }
}
</script>

<style scoped>

</style>
