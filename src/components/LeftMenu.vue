<template>
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
</template>

<script>

  import Arrows from '../components/Arrows'

  export default {

    name: 'LeftMenu',

    components: {
      Arrows,
    },

    data() {
      return {
        leftMenu: ['手机 电话卡', '电视 盒子', '笔记本 平板', '家电 插线板', '出行 穿戴',
          '智能 路由器', '电源 配件', '健康 儿童', '耳机 音响', '生活 箱包'],

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
      this.displayInit('#left-menu-ul', '#left-menu-detail')

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

      }
    }
  }
</script>

<style scoped>

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

  .left-menu-item:hover {
    color: #ff6700;
  }

</style>
