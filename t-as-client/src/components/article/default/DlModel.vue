<template>
  <div id="DlModel">
    <h1 class="hid">{{ msg }}</h1>
    <h2>下载模板组件</h2>
    <table>
      <thead>
        <tr>
          <th>标题</th>
          <th>版本</th>
          <th>更新时间</th>
          <th>下载</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mdDl, index) in dlList" :key="index">
          <td><p class="dlTit">{{ mdDl['title'] }}</p></td>
          <td><p class="dlVer">{{ mdDl['version'] }}</p></td>
          <td><p class="dlTim">{{ mdDl['time'] }}</p></td>
          <td><p class="dlCon"><a href="javascript:" class="fa fa-download fa-fw" @click="downloadMd(mdDl['modelId'])"></a></p></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DlModel',
  data() {
    return {
      msg: 'DlModel',
      dlList: [
        {title:'asjdfhjkdkflasdfjasdaslkdfja', time:'2019/02/12 06:12:22', version:'v1.0.0', modelId: 'md01'},
        {title:'asjdfhjkdkflasdfjasdaslkdfja', time:'2019/02/12 06:12:22', version:'v1.0.0', modelId: 'md02'},
        {title:'asjdfhjkdkflasdfjasdaslkdfja', time:'2019/02/12 06:12:22', version:'v1.0.0', modelId: 'md03'},
        {title:'asjdfhjkdkflasdfjasdaslkdfja', time:'2019/02/12 06:12:22', version:'v1.0.0', modelId: 'md04'},
        {title:'asjdfhjkdkflasdfjasdaslkdfja', time:'2019/02/12 06:12:22', version:'v1.0.0', modelId: 'md05'},
        {title:'asjdfhjkdkflasdfjasdaslkdfja', time:'2019/02/12 06:12:22', version:'v1.0.0', modelId: 'md06'},
        {title:'asjdfhjkdkflasdfjasdaslkdfja', time:'2019/02/12 06:12:22', version:'v1.0.0', modelId: 'md07'},
        {title:'asjdfhjkdkflasdfjasdaslkdfja', time:'2019/02/12 06:12:22', version:'v1.0.0', modelId: 'md08'},
      ]
    }
  }
}
</script>

<style scoped>
table{width:100%; height:auto;}
table p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.dlTit{width:382px;}
.dlVer{width:130px;}
.dlTim{width:150px;}
.dlCon{width:40px;}
</style>