<template>
  <div id="CheckInfo">
    <h1 class="hid">{{ msg }}</h1>
    <h2>确认（检查）上传信息组件</h2>
    <table>
      <tbody v-show="uploadings.table.length == 0"><tr>
        <td>没有正在上传的信息，快点击“<router-link to="/upload/ul-excel">上传表格</router-link>”进行上传吧！</td></tr></tbody>
      <tbody v-show="uploadings.table.length > 0">
        <tr>
          <td v-for="(tit,idxTit) in uploadings.title" :key="idxTit" v-text="tit"></td>
        </tr>
        <tr v-for="(tab,idxTab) in uploadings.table" :key="idxTab">
          <td v-for="(td,idxTd) in tab" :key="idxTd" v-text="td"></td>
          <td><a href="javascript:" @click="modify(idxTab)">修改</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CheckInfo',
  data() {
    return {
      msg: 'CheckInfo',
      uploadings: {
        title: [/*'td1st','td2ed','td3rd'*/],
        table: [/*
          {td1:'111',td2:'222',td3:'333'},
          {td1:'2111',td2:'2222',td3:'2333'}
        */]
      }
    }
  },
  mounted(){

  },
  methods: {
    modify: function(index){
      var table = this.uploadings.table;
      console.log(index,table[index]);
    }
  }
}
</script>

<style scoped>
table{width:100%;}
</style>
