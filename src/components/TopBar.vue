<template>
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
        <router-link class="top-bar-text" :to="{name:'Login'}">登录</router-link>
        <span class="sep">|</span>
        <a class="top-bar-text">消息通知</a>
        <span class="sep">|</span>
        <div id="" style="float: right;">
          <a id="cart" class="cart-container" href="">
            <img src="../assets/images/cart.png" style="height: 18px;width: 18px;margin:9px 5px auto 0;" alt="购物车.png">
            购物车（0）
          </a>
        </div>
      </div>
      <div id="cart-hint" class="cart-hint">
        <span style="font-size: 12px;color: #b0b0b0;line-height: 40px;">购物车中还没有商品，赶紧选购吧！</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'TopBar',
    data() {
      return {}
    },
    created() {
      this.fetchData()
    },
    mounted() {
      this.displayAnimInit('#cart', '#cart-hint', null, '98px', 180)
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
    cursor: pointer;

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

  .cart-hint {
    width: 316px;
    height: 0px;
    position: absolute;
    z-index: 10;
    right: 338px;
    top: 40px;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
