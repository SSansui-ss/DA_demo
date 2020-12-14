<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="el-menu-demo"
          background-color="#333444"
          text-color="#fff"
          active-text-color="#ffd04b"
          router    
        >
          <el-menu-item index="/index/one/home">后台首页</el-menu-item>
          <el-menu-item index="/index/img">相册管理</el-menu-item>
          <el-menu-item index="/index/list">商品列表</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
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
  methods: {},
  computed: {}
};
</script>

<style scoped>
</style>
