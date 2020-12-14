<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        class="el-menu-demo"
        background-color="#fff"
        text-color="#000"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/index/one">商品列表</el-menu-item>
        <el-menu-item index="/index/img">商品管理</el-menu-item>
        <el-menu-item index="/index/list">商品详情</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  .el-aside {
    width: 100%;
    height: 100%;
    bg
    // border-right: 1px solid #f0f0f0;
    .el-menu {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
