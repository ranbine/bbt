<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header
  },
  name: 'App',
  data () {
    return {
      isLogin: ''
    }
  },
  mounted () {
    let userInfo = localStorage.getItem('userInfo') || {}
    this.$store.commit('login', userInfo)
  }
}
</script>

<style lang="stylus">
@import '../static/css/reset.css'
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
