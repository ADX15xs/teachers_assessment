<template>
  <div id="UlMsg">
    <h1 class="hid">{{ msg }}</h1>
    <h2>上传信息查看组件</h2>
    <table>
      <thead>
        <tr>
          <th><p>序号</p></th>
          <th><p>论文名</p></th>
          <th><p>类型</p></th>
          <th><p>创建时间</p></th>
          <th><p>修改时间</p></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="5"><p>暂无</p></td>
          <!-- <td><p>001</p></td>
          <td><p>我的论文001</p></td>
          <td><p>类型+001</p></td>
          <td><p>2018/02/03</p></td>
          <td><p>2018/02/21</p></td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UlMsg',
  data() {
    return {
      msg: 'UlMsg'
    }
  }
}
</script>

<style scoped>
h2{text-align:left;}
table{width:100%; height:auto;}
table p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap; height:40px; line-height:40px;}
table thead{background-color:#f5f5f6; border-bottom:2px solid #ddd;}
table tbody tr{background-color:#fff; border-bottom:1px solid #ddd;}
</style>
