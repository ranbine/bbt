<template>
  <div class="header">
    <div class="header-content">
      <div class="header-logo">
        <img src="../assets/logo.822452b.png" height="60">
        <h2>猿计划</h2>
      </div>
      <div class="menu">
        <ul>
          <router-link to="/user/myInfo" tag="li" class="menu-item">未读消息</router-link>
          <router-link to="/index" tag="li" class="menu-item">首页</router-link>
          <router-link to="/knowledge" tag="li" class="menu-item">知识体系</router-link>
          <router-link to="/activity" tag="li" class="menu-item">活动中心</router-link>
          <router-link to="/home" tag="li" class="menu-item">文章</router-link>
          <router-link to="/write" tag="li" class="menu-item">写文章</router-link>
          <router-link to="/login" tag="li" class="menu-item">登陆/注册</router-link>
          <li class="menu-item user-info">
            <el-dropdown placement="bottom" size="mini">
              <span>
                下拉菜单
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>我的帖子</el-dropdown-item>
                <el-dropdown-item>我的收藏</el-dropdown-item>
                <el-dropdown-item>我的任务</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.header
  position: fixed
  z-index: 999
  height: 66px
  width: 100%
  background-color: #fafafa
  border-top: 1px solid #333
  box-shadow: 0 2px 10px rgba(0,0,0,.1),0 1px rgba(0,0,0,.1)
  .header-content
    width: 1100px
    margin: 0 auto
    .header-logo
      float: left
      font-size: 0
      img, h2
        display: inline-block
        height: 60px
        line-height: 66px
        font-size: 26px
    .menu
      float: right
      .menu-item
        display: inline-block
        height: 60px
        line-height: 65px
        padding: 0 5px
        margin-left: 30px
        color: #48576a
        border-bottom: 3px solid transparent
        cursor: pointer
        transition: border-color .3s,background-color .3s,color .3s
        &:hover
          border-bottom: 3px solid #ea0f2d
      .router-link-active
        color: #ea0f2d
      .user-info
        border: none
        &:hover
          border: none
</style>
