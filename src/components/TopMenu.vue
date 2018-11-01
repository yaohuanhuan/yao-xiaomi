<template>
  <div class="top-menu-container">
    <div style="width: 1226px;height: 98px;display: flex;align-items: center;position: relative">
      <a class="logo" href="">Mi</a>
      <div style="width: 184px;height: 98px;background-color: #ffffff"></div>
      <div id="menu-container" style="display: flex;width: 500px;justify-content: space-between">
        <a :id="'menu'+index" class="top-menu-text" v-for="(item,index) in topMenu" href="">{{item}}</a>
      </div>
      <div class="input-container">
        <input type="text" class="input-search">
        <div class="search-btn"></div>
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
</template>

<script>

  export default {
    name: 'TopMenu',
    data() {
      return {
        topMenu: ['小米手机', '红米', '电视', '笔记本', '空调', '新品', '路由器', '智能硬件'],
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
      }
    },
    created() {
      this.fetchData()

    },
    mounted(){
      this.displayAnimInit('#menu-container', '#menu-detail-container', null, '230px', 180)
      for (let i = 0; i < this.topMenu.length; i++) {
        $('#menu' + i).hover((data) => {
          console.log('333')
          if (data.type === 'mouseenter') {
            this.menuData = this.allMenuData[i]
          }
        })
      }
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


  .top-menu-container {
    width: 100%;
    height: 98px;
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
    top: 98px;
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
</style>
