<template>
  <div class="login">
    <loginbox :btnText="btnText" @doSubmit="restPwd">
      <div slot="content">
         <input v-model="mobile" class="login-input" type="text" placeholder="请输入手机号">
         <input v-model="pwd" class="login-input" type="password" placeholder="请输入新秘密">
         <input v-model="repeatPwd" class="login-input" type="password" placeholder="请输入确认秘密">
         <input v-model="yzm" id="input-yzm" class="login-input" type="text" name="yzm" placeholder="请输入验证码">
         <p for="yzm" 
            class="input-yzm-label" 
            @click="getYzm"
            >获取验证码</p>
      </div>
      <div slot="footer">
        <router-link to="/login" tag="p" class="login-footer">已有账号？立即登陆</router-link>
      </div>
    </loginbox>
  </div>
</template>

<script>
import loginbox from '../common/loginbox'
export default {
  name: 'Register',
  components: {
    loginbox
  },
  data () {
    return {
      btnText: '找回密码',
      mobile: '',
      pwd: '',
      repeatPwd: '',
      yzm: ''
    }
  },
  methods: {
    restPwd () {
      if (this.mobile === '' || this.pwd === '' || this.repeatPwd === '') return this.$message.warning("请输入用户名和密码!")
      if (this.pwd !==  this.repeatPwd) return this.$message.warning("密码不一致!")
      let para = {mobile: this.mobile, pwd: this.pwd, pwd2: this.restPwd, 'sms_code': this.yzm}
      this.$axios.post('Forgetpwd/reset', para).then((response) => {
        let result = response.data
        if (result.status === 1) {
          this.$message.success('重置密码成功！')
          this.$router.push({path: 'login'})
        } else {
          this.$message.error('重置密码失败！' + result.info)
        }
      })
    },
    getYzm () {
      if (this.mobile === '' || this.pwd === '' || this.repeatPwd === '') return this.$message.warning("请输入用户名和密码!")
      if (this.pwd !==  this.repeatPwd) return this.$message.warning("密码不一致!")
      this.$axios.post('Sendsms/send', para).then((response) => {
        let result = response.data
        if (result.status === 1) {
          this.$message.success('验证码已发送成功！')
        } else {
          this.$message.error('验证码发送失败！' + result.info)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.login
  padding: 120px
  font-size 0
  #input-yzm 
    width 60%
    margin-right 5%
  .input-yzm-label 
    display inline-block
    width 35%
    height: 30px
    line-height: 30px
    background-color #46b036
    border-radius 6px
    color #fff
    font-size 12px
    text-align center
    cursor pointer
  .login-footer
    font-size 12px
    text-align center
    cursor pointer
</style>
