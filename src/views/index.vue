<template>
  <div>
    <el-container>
      <el-header>
        <h3>UNI-ADMIN</h3>
        <el-menu
          class="el-menu-demo"
          background-color="#333444"
          text-color="#fff"
          active-text-color="#ffd04b"
          mode="horizontal"
          router
        >
          <el-menu-item index="/index/one">首页</el-menu-item>
          <el-menu-item index="/index/shop">商品</el-menu-item>
          <el-menu-item index="/list">订单</el-menu-item>
          <el-menu-item index="/vip">会员</el-menu-item>
          <el-menu-item index="/she">设置</el-menu-item>
          <el-submenu index="2">
            <template slot="title">admin</template>
            <el-menu-item index="2-1">修改</el-menu-item>
            <el-menu-item index="2-2" @click="esc">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
      esc(){
          sessionStorage.removeItem('token')
          this.$router.push('/')
          this.$message.success('退出成功')
      }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  .el-header {
    width: 100%;
    height: 100%;
    background: #333444;
    display: flex;
    justify-content:space-between;
    align-items: center;
    h3{
        color: #fff;
    }
  }
}
</style>
