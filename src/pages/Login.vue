<template>
  <div class="container">
    <div style="width: 1226px">
      <a class="logo" href=""></a>
    </div>

    <div class="bg">
      <div class="form-container">
        <h class="form-title">帐号登录</h>
        <input class="input-username" type="text" placeholder="手机号码">
        <input class="input-password" type="text" placeholder="密码">
        <div style="width: 100%;">
          <p class="hint">请输入账号</p>
        </div>
        <div class="commit-btn">
          <span class="commit-text">登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {}
    },
    created() {
      this.fetchData()
    },
    watch: {
      '': 'fetchData'
    },
    methods: {
      fetchData() {

      }
    }
  }
</script>

<style scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bg {
    background: url('../assets/images/login_bg.jpg') center;
    display: flex;
    width: 100%;
    height: 588px;
    justify-content: center;

  }

  .logo {
    width: 200px;
    height: 98px;
    display: block;
    margin-left: 48px;
    background: url('../assets/images/mistore_logo.png');
  }

  .form-container {
    width: 410px;
    height: 350px;
    background-color: white;
    margin-left: 700px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-title{
    font-size: 24px;
    color: #f56600;
    margin-top: 25px;
  }

  .input-username{
    width: 320px;
    height: 48px;
    outline: none;
    padding: 0 12px 0 12px;
    font-size: 14px;
    line-height: 48px;
    border: 1px solid #dadada;
    margin-top: 35px;
  }

  .input-password{
    width: 320px;
    height: 48px;
    outline: none;
    padding: 0 12px 0 12px;
    font-size: 14px;
    line-height: 48px;
    border: 1px solid #dadada;
    margin-top: 15px;
  }

  .commit-btn{
    width: 346px;
    height: 48px;
    background-color: #f56600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .commit-text{
    color: white;
  }

  .hint{
    color: #f56600;
    line-height: 45px;
    margin-left: 35px;
  }




</style>
