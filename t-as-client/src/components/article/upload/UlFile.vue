<template>
  <div id="UlFile">
    <h1 class="hid">{{ msg }}</h1>
    <h2>上传附件</h2>
    <h3>请选择您的附件文件</h3>
    <!-- <form enctype="multipart/form-data" action="#" method="post"> -->
      <input type="file" name="ulFile" id="ulFile" multiple="multiple">
      <table>
        <thead>
          <tr>
            <th><p class="num">序号</p></th>
            <th><p class="fileName">文件名</p></th>
            <th><p class="fileType">文件类型</p></th>
            <th><p class="fileSize">文件大小</p></th>
            <th><p class="modiTime">修改日期</p></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(file,index) in files" :key="index">
            <td><p class="num">{{ file['num'] }}</p></td>
            <td><p class="fileName">{{ file['name'] }}</p></td>
            <td><p class="fileType">{{ file['type'] }}</p></td>
            <td><p class="fileSize">{{ file['size'] }}</p></td>
            <td><p class="modiTime">{{ file['time'] }}</p></td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="上传" @click="upload()">
    <!-- </form> -->
  </div>
</template>

<script>
export default {
  name: 'UlFile',
  data() {
    return {
      msg: 'UlFile',
      count: 1,
      files: []
    }
  },
  mounted(){
    var file = document.getElementById('ulFile');
    var self = this;
    file.onchange = function(e){
      var files = e.currentTarget.files; // 数组
      var output = [];
      for(var i=0; i<files.length; i++){
        var f = files[i];
        var fName = self.getName(f['name']);
        var fType = self.getType(f['name']);
        var fSize = self.getSize(f['size'])
        var fLMTime = self.getLMTime(f['lastModifiedDate']);
        output.push({
          num: self.count,
          name: fName,
          type: fType,
          size: fSize,
          time: fLMTime
        });
        self.count += 1;
      }
      self.files = output;
    };
  },
  methods: {
    getName(n){
      var end = n.lastIndexOf('.');
      var name = n.substring(0, end);
      return name;
    },
    getType(n){
      var start = n.lastIndexOf('.');
      var type = n.substring(start, n.length);
      return type;
    },
    getSize(s){
      var size = s;
      var unit = ['B', 'KB'];
      var i = 0;
      while(size > 1024 && i < 1){
        i++;
        size = Math.round(size/1024);
      }
      size = toThousands(size); // 格式化数字
      function toThousands(num) {
          var num = (num || 0).toString(), result = '';
          while (num.length > 3) {
              result = ',' + num.slice(-3) + result;
              num = num.slice(0, num.length - 3);
          }
          if (num) { result = num + result; }
          return result;
      }
      return `${size} ${unit[i]}`;
    },
    getLMTime(t){
      var YYYY = t.getFullYear();
      var MM = t.getMonth() < 9? `0${t.getMonth()+1}`: t.getMonth()+1;
      var DD = t.getDate() < 10? `0${t.getDate()}`: t.getDate();
      var hh = t.getHours() < 10? `0${t.getHours()}`: t.getHours();
      var mm = t.getMinutes() < 10? `0${t.getMinutes()}`: t.getMinutes();
      return `${YYYY}/${MM}/${DD} ${hh}:${mm}`
    },
    upload(){
      alert('上传成功')
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
