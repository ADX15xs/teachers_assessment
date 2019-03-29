<template>
  <div id="LastMsg">
    <h1 class="hid">{{ msg }}</h1>
    <h2>最新消息组件</h2>
    <div class="toolLine">
      <a href="javascript:" class="del" @click="deleteSome">删除</a>
      <a href="javascript:" class="read" @click="setRead(true)">标记为已读</a>
      <a href="javascript:" class="unread" @click="setRead(false)">标记为未读</a>
    </div>
    <table>
      <thead>
        <tr>
          <th><p class="msgSel"><input type="checkbox" name="selAll" id="selAll" v-model="selAll" @click="selectAll"></p></th>
          <th><p class="msgTit">标题</p></th>
          <th><p class="msgTim">时间</p></th>
          <th><p class="msgCon">操作</p></th>
        </tr>
      </thead>
      <tbody>
        <tr v-show="newMsgs.length == 0">
          <td colspan="4"><p>没有任何新的消息！</p></td>
        </tr>
        <tr v-show="newMsgs.length > 0" v-for="(newMsg, index) in newMsgs" :key="index">
          <td><p class="msgSel"><input type="checkbox" name="selThis" :id="'selThis'+index" v-model="newMsg['state']" @click="checkMsg(newMsg)"></p></td>
          <td><p class="msgTit">{{ newMsg['title'] }}</p></td>
          <td><p class="msgTim">{{ newMsg['time'] }}</p></td>
          <td><p class="msgCon">
            <a href="javascript:" title="以读" v-show="newMsg['read']"><i class="fa fa-comment-o fa-fw"></i></a>
            <a href="javascript:" title="查看" v-show="!newMsg['read']"><i class="fa fa-commenting-o fa-fw"></i></a>
            <a href="javascript:" title="删除" @click="deleteOne(newMsg['msgId'])"><i class="fa fa-times-circle-o fa-fw"></i></a></p></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'LastMsg',
  data() {
    return {
      msg: 'LastMsg',
      selAll: false,
      newMsgs: [
        // {state:false, title:'1123123124sasfasdfasdf', time:'2018/12/31', read:false, msgId: 'msg01'},
        // {state:false, title:'1123123124sasfasdfasdf', time:'2018/12/31', read:true, msgId: 'msg02'},
        // {state:false, title:'1123123124sasfasdfasdf', time:'2018/12/31', read:true, msgId: 'msg03'},
        // {state:false, title:'1123123124sasfasdfasdf', time:'2018/12/31', read:false, msgId: 'msg04'},
        // {state:false, title:'1123123124sasfasdfasdf', time:'2018/12/31', read:false, msgId: 'msg05'},
      ]
    }
  },
  mounted(){

  },
  methods: {
    selectAll: function(boo){
      if(!this.selAll && boo){
        this.setAllAttr(this.newMsgs, 'state', true);
        this.selAll = true;
      }else{
        this.setAllAttr(this.newMsgs, 'state', false);
        this.selAll = false;
      }
    },
    checkMsg: function(item){
      item.state = !item.state;
    },
    setRead: function(boo){
      var arr = this.newMsgs;
      for(var i in arr){
        if(arr[i]['state']) arr[i]['read'] = boo;
      }
      this.selectAll(false);
      // 上报
    },
    deleteOne: function(id){
      var arr = this.newMsgs;
      for(var i in arr){
        if(arr[i]['msgId'] == id) this.newMsgs.splice(i, 1);
      }
      // 上报或移到垃圾箱
    },
    deleteSome: function(){
      var arr = this.newMsgs;
      var newArr = [];
      for(var i in arr){
        if(!arr[i]['state']) newArr.push(arr[i]);
      }
      this.newMsgs = newArr;
      this.selectAll(false);
      // 上报或移到垃圾箱
    },
    setAllAttr: function(arr, attr, value){
      for(var i in arr){
        arr[i][attr] = value;
      }
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
.msgSel{width:40px;}
.msgTit{width:432px;}
.msgTim{width:130px;}
.msgCon{width:100px;}
</style>
