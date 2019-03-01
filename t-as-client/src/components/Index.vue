<template>
  <div class="index">
    <h1 class="hid">{{ msg }}</h1>
    <nav-pub></nav-pub>
    <section>
      <nav-act-pub></nav-act-pub>
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

</style>
