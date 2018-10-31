<template>
  <div style="">
    <div class="top-bar"></div>
    <div style="width: 100%;height: 40px;">
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
            <!--TODO 用伪类简化html-->
            <a class="top-bar-text">注册</a>
            <span class="sep">|</span>
            <a class="top-bar-text">登录</a>
            <span class="sep">|</span>
            <a class="top-bar-text">消息通知</a>
            <span class="sep">|</span>
            <div id="" style="float: right;">
              <a id="cart" class="cart-container" href="">
                <img src="../assets/images/cart.png" style="height: 18px;width: 18px;margin:9px 5px auto 0;"
                     alt="购物车.png">
                购物车（0）
              </a>
            </div>
          </div>
          <div id="cart-hint" class="cart-hint">
            <span style="font-size: 12px;color: #b0b0b0;line-height: 40px;">购物车中还没有商品，赶紧选购吧！</span>
          </div>
        </div>
      </div>
    </div>
    <div class="top-menu-container">
      <div style="width: 1226px;height: 88px;display: flex;align-items: center;position: relative">
        <a class="logo" href="">Mi</a>
        <div style="width: 184px;height: 88px;background-color: #ffffff"></div>
        <div id="menu-container" style="display: flex;width: 500px;justify-content: space-between">
          <a :id="'menu'+index" class="top-menu-text" v-for="(item,index) in topMenu" href="">{{item}}</a>
        </div>
        <div class="input-container">
          <input type="text" class="input-search">
          <div class="search-btn" v-on:click="test"></div>
        </div>
      </div>
      <div id="menu-detail-container" class="top-menu-detail">
        <ul style="width: 1226px;margin: auto;">
          <div style="display: flex;flex-direction: row">
            <div v-for="(item,index) in menuData" style="display: flex;">
              <div class="menu-item">
                <img :src="item.image" alt="" style="width: 160px;height: 110px;">
                <a href="" style="font-size: 12px;color: #333;text-decoration: none;margin-top: 14px">{{item.name}}</a>
                <p style="font-size: 12px;color: #ff6700;">{{item.price}}</p>
              </div>
              <div style="height: 100px;width: 1px;background-color: #d6d6d6;margin-top: 40px"
                   v-if="index != menuData.length - 1"></div>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <div style="width: 100%;display: flex;align-items: center;justify-content: center;">
      <div style="width: 1226px;position:relative;display: flex">
        <Banner/>
        <div class="left-menu-container">
          <div style="position: relative;display: flex">
            <ul id="left-menu-ul" class="left-menu-ul">
              <li :id="'li'+index" class="left-menu-li" v-for="(item,index) in leftMenu">
                <a :id="'leftMenu'+index" class="left-menu-a" href="">{{item}}</a>
                <Arrows color="#b3afa5" size="1" direction="right" style="position: absolute;right: 25px;"></Arrows>
              </li>
            </ul>
            <div id="left-menu-detail" class="left-menu-detail">
              <div style="width: 248px;height: 458px;background-color: white;display: flex;flex-direction: column"
                   v-for="(outItem,outIndex) in (Math.ceil(menuDetail.length/6))">
                <div style="width: 248px;height: 76px;position: relative;"
                     v-for="(item,index) in (outItem > menuDetail.length / 6 ?  menuDetail.length % 6 : 6)">
                  <a :id="'leftMenu'+index" href="" class="left-menu-item">{{menuDetail[outIndex*6+index].name}}</a>
                  <img style="width: 40px;height: 40px;position: absolute;top: 18px;left: 20px"
                       :src="menuDetail[outIndex*6+index].image" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      return {
        cartBlockShow: false,
        cartHintBlockShow: false,
        topMenu: ['小米手机', '红米', '电视', '笔记本', '空调', '新品', '路由器', '智能硬件'],
        leftMenu: ['手机 电话卡', '电视 盒子', '笔记本 平板', '家电 插线板', '出行 穿戴',
          '智能 路由器', '电源 配件', '健康 儿童', '耳机 音响', '生活 箱包'],
        menuData: [],
        allMenuData: [
          [
            {image: require('../assets/images/top_menu/max3-320-220.png'), name: '小米Mix', price: '3233起1'},
            {image: require('../assets/images/top_menu/mix3-320.png'), name: '小米Max', price: '3233起1'},
            {image: require('../assets/images/top_menu/pc-320-220-mi8.png'), name: '小米8', price: '3233起1'},
            {image: require('../assets/images/top_menu/pc-320-220-mi8se.png'), name: '小米8se', price: '3233起1'},
            {image: require('../assets/images/top_menu/pingmu-320.png'), name: '小米8屏幕', price: '3233起1'},
            {image: require('../assets/images/top_menu/qingchun-320.png'), name: '小米8青春版', price: '3233起1'},
          ],
          [
            {image: require('../assets/images/top_menu/6A320.png'), name: '小米Mix', price: '3233起1'},
            {image: require('../assets/images/top_menu/6pro320-220.png'), name: '小米Max', price: '3233起1'},
            {image: require('../assets/images/top_menu/666320.png'), name: '小米8', price: '3233起1'},
            {image: require('../assets/images/top_menu/note5-320-220.png'), name: '小米8se', price: '3233起1'},
            {image: require('../assets/images/top_menu/s2-320-220.png'), name: '小米8屏幕', price: '3233起1'}
          ],
          [
            {image: require('../assets/images/top_menu/4a43.png'), name: '小米Mix', price: '3233起3'},
            {image: require('../assets/images/top_menu/4a65555.png'), name: '小米Max', price: '3233起'},
            {image: require('../assets/images/top_menu/4A-55.jpg'), name: '小米8', price: '3233起'},
            {image: require('../assets/images/top_menu/4c-40xin.png'), name: '小米8se', price: '3233起'},
            {image: require('../assets/images/top_menu/50.png'), name: '小米8屏幕', price: '3233起'},
            {image: require('../assets/images/top_menu/32.png'), name: '小米8青春版', price: '3233起'},
          ],
          [
            {image: require('../assets/images/top_menu/bijiben32012.5.jpg'), name: '小米Mix', price: '3233起4'},
            {image: require('../assets/images/top_menu/320x220biiben.png'), name: '小米Max', price: '3233起'},
            {image: require('../assets/images/top_menu/xinbijiben.png'), name: '小米8', price: '3233起'},
            {image: require('../assets/images/top_menu/WechatIMG603.png'), name: '小米8se', price: '3233起'},
            {image: require('../assets/images/top_menu/daohang13.3.jpg'), name: '小米8屏幕', price: '3233起'},
            {image: require('../assets/images/top_menu/pingbanok.png'), name: '小米8青春版', price: '3233起'},
          ],
          [
            {image: require('../assets/images/top_menu/kongtiao320-220.jpg'), name: '小米Mix', price: '3233起5'}
          ],
          [
            {image: require('../assets/images/top_menu/erji.jpg'), name: '小米Mix', price: '3233起6'},
            {image: require('../assets/images/top_menu/shouhuanNFC.jpg'), name: '小米Max', price: '3233起'},
            {image: require('../assets/images/top_menu/shexiangjizengqiang.jpg'), name: '小米8', price: '3233起'},
            {image: require('../assets/images/top_menu/naozhong.jpg'), name: '小米8se', price: '3233起'},
          ],
          [
            {image: require('../assets/images/top_menu/3A.png'), name: '小米Mix', price: '3233起7'},
            {image: require('../assets/images/top_menu/3G.png'), name: '小米Max', price: '3233起'},
            {image: require('../assets/images/top_menu/quanbuluyouqi.png'), name: '小米8', price: '3233起'},
            {image: require('../assets/images/top_menu/quanbuluyouqi.png'), name: '小米8se', price: '3233起'},
            {image: require('../assets/images/top_menu/xiaomiluyouqi4.png'), name: '小米8屏幕', price: '3233起'},
          ],
          [
            {image: require('../assets/images/top_menu/air2.jpg'), name: '小米Mix', price: '3233起8'},
            {image: require('../assets/images/top_menu/dfb.jpg'), name: '小米Max', price: '3233起'},
            {image: require('../assets/images/top_menu/kongqijinghuaqi.jpg'), name: '小米8', price: '3233起'},
            {image: require('../assets/images/top_menu/saodijiqiren320-220.jpg'), name: '小米8se', price: '3233起'},
            {image: require('../assets/images/top_menu/tixudao.jpg'), name: '小米8屏幕', price: '3233起'},
            {image: require('../assets/images/top_menu/xiaomijingshuiqi.jpg'), name: '小米8青春版', price: '3233起'},
          ]
        ],
        menuDetail: [],
        allLeftMenuData: [
          [{
            name: '小米手机1', image: require('../assets/images/left_menu/qingchun-80.png')
          }],
          [{
            name: '小米手机2', image: require('../assets/images/left_menu/heisha-80.png')
          }],
          [{
            name: '小米手机3', image: require('../assets/images/left_menu/80808080808080.jpg')
          }],
          [{
            name: '小米手机', image: require('../assets/images/left_menu/qingchun-80.png')
          }],
          [{
            name: '小米手机', image: require('../assets/images/left_menu/qingchun-80.png')
          }],
          [{
            name: '小米手机', image: require('../assets/images/left_menu/qingchun-80.png')
          }],
          [{
            name: '小米手机', image: require('../assets/images/left_menu/qingchun-80.png')
          }],
          [{
            name: '小米手机', image: require('../assets/images/left_menu/qingchun-80.png')
          }],
          [{
            name: '小米手机', image: require('../assets/images/left_menu/qingchun-80.png')
          }],
          [{
            name: '小米手机', image: require('../assets/images/left_menu/qingchun-80.png')
          }],
        ],
      }
    },
    created() {
      this.fetchData()
    },
    mounted() {
      this.displayAnimInit('#cart', '#cart-hint',null, '98px',180)
      this.displayAnimInit('#menu-container', '#menu-detail-container',null, '230px',180)
      this.displayInit('#left-menu-ul', '#left-menu-detail')

      for (let i = 0; i < this.topMenu.length; i++) {
        $('#menu' + i).hover((data) => {
          if (data.type === 'mouseenter') {
            this.menuData = this.allMenuData[i]
          }
        })
      }
      for (let i = 0; i < this.leftMenu.length; i++) {
        $('#leftMenu' + i).hover((data) => {
          if (data.type === 'mouseenter') {
            this.menuDetail = this.allLeftMenuData[i]
          }
        })
      }
    },
    watch: {
      '': 'fetchData'
    },
    methods: {
      fetchData() {


      },

      test() {
        console.log('123')
      },
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

  .top-menu-container {
    width: 100%;
    height: 88px;
    display: flex;
    background-color: #ffffff;
    flex-direction: column;
    align-items: center;
    position: relative
  }

  .logo {
    width: 55px;
    height: 55px;
    overflow: hidden;
    display: block;
    background-color: #ff6700;
    text-decoration: none;
    font-size: 32px;
    color: white;
    font-weight: 400;
    text-align: center;
    line-height: 55px;
  }

  .top-menu-text {
    text-decoration: none;
    font-size: 16px;
    color: #333;
    display: block;
    height: 35px;
    text-align: center;
    line-height: 35px;
  }

  .top-menu-text:hover {
    color: #ff6700;
  }

  .top-menu-detail {
    width: 100%;
    height: 0px;
    position: absolute;
    background-color: white;
    top: 88px;
    z-index: 1;
    border-top: 1px solid #e0e0e0;
    box-shadow: 0 1px 1px #cecece;
  }

  .menu-item {
    display: flex;
    float: left;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 203px;
    margin-top: 36px;

  }

  .input-container {
    width: 300px;
    height: 50px;
    position: absolute;
    right: 0;
    border: 0px solid white;
    display: flex;
  }

  .input-search {
    width: 228px;
    height: 48px;
    outline: none;
    padding: 0 10px 0 10px;
    font-size: 14px;
    line-height: 48px;
    border: 1px solid #d1d1d1;
  }

  .input-search:hover {
    border-color: #b4b4b4;
  }

  .input-search:focus {
    border-color: #ff6700;
    transition: 500ms;
  }

  .input-search:active {
    border-color: #ff6700;
    transition: 500ms;
  }

  .search-btn {
    width: 50px;
    height: 48px;
    cursor: pointer;
    border: 1px solid #d1d1d1;
    border-left-width: 0;
    background: white url("../assets/images/search_gray.png") no-repeat center;
    background-size: 20px 20px;
  }

  .search-btn:hover {
    background: #ff6700 url("../assets/images/search_white.png") no-repeat center;
    border: 1px solid #ff6700;
    border-left-width: 0;
    background-size: 20px 20px;
    transition: 700ms;
  }

  .left-menu-container {
    width: 234px;
    height: 460px;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
  }

  .left-menu-ul {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    background-color: transparent
  }

  .left-menu-li {
    height: 43px;
    list-style: none;
    position: relative;
    background-color: transparent;
    align-items: center;
    display: flex;

  }

  .left-menu-a {
    display: block;
    line-height: 43px;
    width: 204px;
    text-decoration: none;
    background-color: transparent;
    font-size: 14px;
    color: white;
    padding-left: 30px;
    z-index: 1;
  }

  .left-menu-a:hover {
    background-color: #ff6700;
  }

  .left-menu-detail {
    height: 458px;
    background-color: white;
    top: 0;
    position: absolute;
    left: 234px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
    display: flex;
    border: 1px solid #e0e0e0;
    border-left-width: 0;
  }

  .left-menu-item {
    line-height: 76px;
    display: flex;
    padding-left: 70px;
    color: #333;
    font-size: 14px;
    text-decoration: none;
  }

  .left-menu-item:hover{
    color: #ff6700;
  }
</style>
