<template>
    <div class="box">
      <div class="log">
        <h2>UNI - ADMIN</h2>
        <el-form >
          <el-form-item>
            <el-input v-model="username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button @click="logAdd">登陆</el-button>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username:'admin',
            password:'admin'
        };
    },
    created() {

    },
    mounted() {
    },
    methods: {
      logAdd(){
        var obj ={username:this.username,password:this.password}
        this.$axios.post('http://ceshi5.dishait.cn/admin/login',obj).then(res=>{
          if(res.msg == "ok"){
            this.$message.success('登陆成功')
            sessionStorage.setItem('admin',res.data.token)
            this.$router.push('/index')
          }
          console.log(res);
        })
      }
    },
    computed:{

    }
};
</script>

<style lang="scss" scoped>
.box{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c5c4b8;
  .log{
    border: 2px solid #E8E8E8;
    background: #fff;
    box-shadow:  0 0 15px #fff;
    width: 500px;
    height: 320px;
    border-radius: 5px;
    h2{
      color: #575D62;
      text-align: center;
      padding: 15px 0 15px 0;
      margin-bottom: 20px;
      border-bottom: 3px solid #E8E8E8;
    }
    .el-form{
      padding: 15px;

    }
    .el-button{
      width: 100%;
      background: #f0f0f0;
    }
  }
}

</style>

