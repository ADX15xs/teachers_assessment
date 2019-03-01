<template>
  <div id="user">
    <h1 class="hid">{{ msg }}</h1>
    <h2>我的提交记录</h2>
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>论文名</th>
          <th>类型</th>
          <th>创建时间</th>
          <th>修改时间</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>我的论文001</td>
          <td>类型+001</td>
          <td>2018/02/03</td>
          <td>2018/02/21</td>
        </tr>
      </tbody>
    </table>
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
  table{margin:0 auto;}
</style>
