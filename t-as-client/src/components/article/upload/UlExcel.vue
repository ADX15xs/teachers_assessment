<template>
  <div id="UlExcel">
    <h1 class="hid">{{ msg }}</h1>
    <h2>上传Excel组件</h2>
    <!-- 限制显示的文件类型
      .xls: application/vnd.ms-excel
      .xlsx: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
     -->
    <h3>仅支持“xls”、“xlsx”类型Excel文件</h3>
    <input type="file" name="ulExcel" id="ulExcel" @change="importf(this)" accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
  </div>
</template>

<script>
export default {
  name: 'UlExcel',
  data() {
    return {
      msg: 'UlExcel',
      excelData: [],
    }
  },
  mounted(){

  },
  methods: {
    // https://www.cnblogs.com/liguiwang/p/8430672.html
    // https://www.cnblogs.com/liuxianan/p/js-excel.html
    // https://www.cnblogs.com/songyz/p/songyz-xlsx.html
    importf(obj) {
      let _this = this;
      this.file = event.currentTarget.files[0];
      var rABS = false; //是否将文件读取为二进制字符串
      var file = this.file;

      FileReader.prototype.readAsBinaryString = function(f) {
        var binary = "";
        var rABS = false; //是否将文件读取为二进制字符串
        var pt = this;
        var workbook; //读取完成的数据  
        // var excelData;
        var reader = new FileReader();
        reader.onprogress = function(e) {
          let total = file.size;
          _this.progress = (e.loaded/total)*100;
          console.log( _this.progress);
        };
        reader.onload = function(e) {
          try {
            var bytes = new Uint8Array(reader.result);
            var length = bytes.byteLength;
            for(var i = 0; i < length; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            if(rABS) {
              workbook = XLSX.read(btoa(fixdata(binary)), { //手动转化
                type: 'base64'
              });
            }else {
              workbook = XLSX.read(binary, {
                type: 'binary'
              });
            }
            // excelData = [];
            _this.excelData = [];
          } catch(e) {
            console.log('文件类型不正确');
            return;
          }
          var fromTo = '';
          console.log(workbook.Sheets);
          for (var sheet in workbook.Sheets) {
            if (workbook.Sheets.hasOwnProperty(sheet)) {
              fromTo = workbook.Sheets[sheet]['!ref'];
              _this.excelData = _this.excelData.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
            }
          }
          console.log(_this.excelData);
        };
        reader.readAsArrayBuffer(f);
      }
      var reader = new FileReader();
      if(rABS) {
        reader.readAsArrayBuffer(file); 
      }else {  
        reader.readAsBinaryString(file);
      } 
    },
  }
}
</script>

<style scoped>

</style>
