<template>
  <div class="nav-pub">
    <h1 class="hid">{{ msg }}</h1>
    <nav class="nav-transversal">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><i class="fa fa-free-code-camp fa-fw"></i> 首页</el-menu-item>
        <el-menu-item index="2"><i class="fa fa-cloud-upload fa-fw"></i> 上传</el-menu-item>
        <!-- <el-menu-item index="3"><i class="fa fa-check-square-o fa-fw"></i> 审核中</el-menu-item> -->
        <el-menu-item index="3"><i class="fa fa-th-list fa-fw"></i> 我的提交</el-menu-item>
      </el-menu>
    </nav>
  </div>
</template>

<script>
import bus from '@/assets/eventBus';

export default {
  name: 'nav-pub',
  data () {
    return {
      msg: 'IndexPage',
      activeIndex: '1',
      navs: [
        {fa:'free-code-camp', link:'首页', url:'/main', menu:[
          {fa:'free-code-camp', link:'最新消息', url:'/main/last-msg'},
          {fa:'free-code-camp', link:'下载模板', url:'/main/dl-model'}
        ]},
        {fa:'cloud-upload', link:'上传', url:'/upload', menu:[
          {fa:'cloud-upload', link:'确认信息', url:'/upload/check-info'},
          {fa:'cloud-upload', link:'上传表格', url:'/upload/ul-excel'},
          {fa:'cloud-upload', link:'上传附件', url:'/upload/ul-file'}
        ]},
        // {fa:'check-square-o', link:'审核中', url:'/checking', menu:[
        //   {fa:'check-square-o', link:'待审核', url:'/checking/wait'}
        // ]},
        {fa:'th-list', link:'我的提交', url:'/user', menu:[
          {fa:'th-list', link:'信息列表', url:'/user/ul-msg'}
        ]}
      ],
    }
  },
  methods: {
    setNavAct: function(jsonMenu){
      bus.$emit('setNavAct',jsonMenu);
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      var self = this;
      this.$router.push(self.navs[key-1]['menu'][0]['url']);
      this.setNavAct(self.navs[key-1]['menu']);
    }
  }
}
</script>

<style scoped>
.nav-transversal ul{font-size:0;}
.nav-transversal li{outline:none; cursor:pointer; display:inline-block; height:60px; line-height:60px; padding:0 10px; font-size:24px;}
</style>
