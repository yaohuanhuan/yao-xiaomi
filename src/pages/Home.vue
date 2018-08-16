<template>
  <div style="">
    <div class="top-bar"></div>
    <div style="width: 100%;height: 40px;z-index: 13">
      <div class="site-top-bar">
        <div class="site-top-bar-container">
          <div class="top-bar-left">
            <a class="top-bar-text" href="https://www.mi.com/index.html">小米商城</a>
            <span class="sep">|</span>
            <a class="top-bar-text">MIUI</a>
            <span class="sep">|</span>
            <a class="top-bar-text">loT</a>
            <span class="sep">|</span>
            <a class="top-bar-text">云服务</a>
            <span class="sep">|</span>
            <a class="top-bar-text">金融</a>
            <span class="sep">|</span>
            <a class="top-bar-text">有品</a>
            <span class="sep">|</span>
            <a class="top-bar-text">小爱开放平台</a>
          </div>
          <div class="top-bar-right">
            <a class="top-bar-text">注册</a>
            <span class="sep">|</span>
            <a class="top-bar-text">登录</a>
            <span class="sep">|</span>
            <a class="top-bar-text">消息通知</a>
            <span class="sep">|</span>
            <div style="float: right">
              <a class="cart-container" href="">
                <img src="../assets/images/cart.png" style="height: 18px;width: 18px;margin:9px 5px auto 0;"
                     alt="购物车.png">
                购物车（0）
              </a>
              <div style="width: 50px;height:50px;background-color: black"></div>
            </div>

            <!--<div style="float: right;height: 40px;display: flex;align-items: center;">-->
            <!---->
            <!--<a class="top-bar-text" style="font-size: 12px;color: #b0b0b0;line-height: 40px;text-decoration: none;" href="">购物车(0)</a>-->
            <!--</div>-->
          </div>

        </div>
      </div>
    </div>
    <div style="width: 100%;display: flex;align-items: center;justify-content: center">
      <Banner></Banner>
    </div>


  </div>

</template>

<script>

  import Arrows from '../components/Arrows'
  import Banner from '../components/Banner'

  export default {
    name: 'Home',
    components: {
      Arrows,
      Banner
    },
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

  .top-bar {
    width: 100%;
    height: 120px;
    background: url('../assets/images/top_bar.jpg') center;
  }

  .site-top-bar {
    position: absolute;
    width: 100%;
    background: #333;
    height: 40px;
  }

  .site-top-bar-container {
    width: 1226px;
    margin-left: auto;
    margin-right: auto;
  }

  .top-bar-left {
    height: 40px;
    float: left;
  }

  .top-bar-right {
    height: 40px;
    float: right;
  }

  .top-bar-text {
    font-size: 12px;
    color: #b0b0b0;
    line-height: 40px;
    text-decoration: none;

  }

  .top-bar-text:hover {
    color: #ffffff;
  }

  .sep {
    margin: 0 .5em;
    color: #424242;
  }

  .cart-container {
    font-size: 12px;
    color: #b0b0b0;
    line-height: 40px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px 0 10px;
  }

  .cart-container:hover {
    background-color: white;
  }

</style>
