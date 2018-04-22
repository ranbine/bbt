<template>
  <div class="login-box">
    <h3 class="login-title">欢迎回到猿计划</h3>
    <div class="line"></div>
    <slot name="content"></slot>
    <div class="submit-btn" @click="submit">{{btnText}}</div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'loginbox',
  props: {
    btnText: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    submit () {
      this.$emit('doSubmit')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.login-box
  width: 422px
  padding: 30px 60px
  margin: 0 auto
  box-shadow: 1px 1px 6px 0 rgba(0,0,0,.2)
  border: 1px solid #ddd
  .login-title
    color: #000
    text-align: center
    line-height: 36px
    font-size: 16px
    font-weight: 400
  .line
    border-top: 1px solid #333
  .login-input
    width: 100%
    margin-top: 20px
    height: 30px
    line-height: 30px
    text-indent: 6px
    border: 1px solid #ccc
  .submit-btn
    width: 200px
    height: 30px
    line-height: 30px
    margin: 30px auto
    background-color: #ea0f2d
    color: #fff
    font-size: 14px
    border-radius: 14px
    cursor: pointer
    text-align center
</style>
