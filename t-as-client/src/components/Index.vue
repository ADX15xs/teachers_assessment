<template>
  <div class="index">
    <h1 class="hid">{{ msg }}</h1>
    <nav-pub></nav-pub>
    <section>
      <nav-act-pub class="nav-act-pub"></nav-act-pub>
      <article>
        <dl>
          <dt class="title-art">{{ titleArt }}</dt>
          <dd>
            <router-view @setTitle='setTitle'/>
          </dd>
        </dl>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'IndexPage',
      titleArt: 'Default Title',
    }
  },
  methods: {
    setTitle: function(tit){
      this.titleArt = tit
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section{min-width:900px; height:auto; margin:0 auto; text-align:center; font-size:0; background-color:#f8f8f8;}
.nav-act-pub,
article{display:inline-block; vertical-align:top;}
.nav-act-pub{width:20%; height:100%; margin-right:2%; font-size:14px;}
article{width:78%; height:100%; font-size:14px;}
.title-art{width:100%; height:40px; font-size:20px; line-height:40px; letter-spacing:2px; font-weight:bold; border-bottom:1px solid #ddd; text-align:left;}
</style>
