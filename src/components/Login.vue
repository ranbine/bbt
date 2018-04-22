<template>
  <div class="login">
    <loginbox :btnText="btnText" @doSubmit="login">
      <div slot="content">
         <input v-model="mobile" class="login-input" type="text" placeholder="请输入登录手机号">
         <input v-model="pwd" class="login-input" type="password" placeholder="6-16秘密，区分大小写，不能使用空格">
         <div class="login-options">
           <label for="rememberMe" 
            class="input-check-label" 
            :class="rememberMe ? 'label-checked' : 'label-unchecked'"
            @click="rememberMe = rememberMe === false"
            >下次自动登陆</label>
            <p class="login-forget"><router-link to="/forgetpwd" tag="span" class="forget-pwd">忘记密码? </router-link><router-link to="/register" tag="span" class="to-register"> 立即注册</router-link></p>
         </div>
      </div>
      <div slot="footer">
        <p class="login-footer">使用合作网站账号登录</p>
        <a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxc649fbdaa41fc636&amp;response_type=code&amp;scope=snsapi_login&amp;redirect_uri=http%3a%2f%2fweb.li-shang-bin.com&amp;login_type=jssdk&amp;self_redirect=default" target=blank>
          <i class="weChat icon iconfont icon-weixin"></i>
        </a>
      </div>
    </loginbox>
  </div>
</template>

<script>
import loginbox from '../common/loginbox'
export default {
  name: 'Login',
  components: {
    loginbox
  },
  data () {
    return {
      btnText: '登陆',
      mobile: '',
      pwd: '',
      rememberMe: true
    }
  },
  methods: {
    login () {
      if (this.mobile === '' || this.pwd === '') return this.$message.warning("请输入用户名和密码!")
      let para = {mobile: this.mobile, pwd: this.pwd}
      this.$axios.post('login/check', para).then((response) => {
        let result = response.data
        if (result.status === 1) {
          this.$message.success('登陆成功！')
          this.$store.commit('login', result.data)
          localStorage.setItem('userInfo', JSON.stringify(result.data))
          this.$router.push({path: 'index'})
        } else {
          this.$message.error('登陆失败！' + result.info)
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
  .login-options
    height 30px
    line-height 30px
    margin-top 20px
    font-size 14px
    .input-check-label
      height 30px
      line-height 30px
      background-size: contain
      padding-left: 26px
      cursor: pointer
    .label-checked
      background url('../assets/checked.svg') no-repeat 0 0
      background-size: contain
      padding-left: 26px
      cursor: pointer
    .label-unchecked
      background url('../assets/unchecked.svg') no-repeat 0 0
      background-size: contain
      padding-left: 26px
      cursor: pointer
    .login-forget
      float right
      .forget-pwd
        cursor pointer
      .to-register
        color #ea0f2d
        cursor pointer
  .login-footer
    font-size 12px
  .weChat
    color green
    font-size 36px
</style>
