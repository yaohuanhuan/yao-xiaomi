<template>
  <div style="width: 1226px;height: 672px;display: flex;flex-direction: column">
    <div style="width: 1226px;height: 58px;">
      <h2 style="font-size: 22px;color: #333;line-height: 58px;font-weight: 200">手机</h2>
    </div>
    <div style="width: 1226px;height: 614px;display: flex">
      <div class="item-container-big">
        <img src="../assets/images/mobile_phone/mix3.jpg" style="width: 234px;height: 614px;" alt="">
      </div>
      <div style="width: 992px;height: 614px;flex-wrap: wrap;display: flex;justify-content: space-between;padding: 0 11px 0 11px">
        <div class="item-container-normal" v-for="(item,index) in listData">
          <img :src="item.image" style="width: 160px;height: 160px;" alt="">
          <a href="" style="font-size: 14px;color: #333;text-decoration: none">{{item.name}}</a>
          <a href="" style="font-size: 12px;color: #b0b0b0;text-decoration: none">{{item.desc}}</a>
          <a href="" style="font-size: 14px;color: #ff6700;text-decoration: none">{{item.price}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'MainList',
        data() {
            return {
              listData:[
                {image:require('../assets/images/mobile_phone/xiaomi8heise.jpg'),name:'小米8 青春版 4GB+64GB',desc:'潮流镜面渐变色，2400万自拍旗舰',price:1399},
                {image:require('../assets/images/mobile_phone/xiaomi8heise.jpg'),name:'小米8 青春版 4GB+64GB',desc:'潮流镜面渐变色，2400万自拍旗舰',price:1399},
                {image:require('../assets/images/mobile_phone/xiaomi8heise.jpg'),name:'小米8 青春版 4GB+64GB',desc:'潮流镜面渐变色，2400万自拍旗舰',price:1399},
                {image:require('../assets/images/mobile_phone/xiaomi8heise.jpg'),name:'小米8 青春版 4GB+64GB',desc:'潮流镜面渐变色，2400万自拍旗舰',price:1399},
                {image:require('../assets/images/mobile_phone/xiaomi8heise.jpg'),name:'小米8 青春版 4GB+64GB',desc:'潮流镜面渐变色，2400万自拍旗舰',price:1399},
                {image:require('../assets/images/mobile_phone/xiaomi8heise.jpg'),name:'小米8 青春版 4GB+64GB',desc:'潮流镜面渐变色，2400万自拍旗舰',price:1399},
                {image:require('../assets/images/mobile_phone/xiaomi8heise.jpg'),name:'小米8 青春版 4GB+64GB',desc:'潮流镜面渐变色，2400万自拍旗舰',price:1399},
                {image:require('../assets/images/mobile_phone/xiaomi8heise.jpg'),name:'小米8 青春版 4GB+64GB',desc:'潮流镜面渐变色，2400万自拍旗舰',price:1399},
              ]
            }
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


  .item-container-big {
    width: 234px;
    height: 614px;
    transition:all .2s linear
  }

  .item-container-big:hover {
    box-shadow:0 15px 30px rgba(0,0,0,0.1);
    transform:translate3d(0, -2px, 0)
  }

  .item-container-normal {
    width: 234px;
    height: 300px;
    transition:all .2s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: white;
    margin-bottom: 14px;
  }

  .item-container-normal:hover {
    box-shadow:0 15px 30px rgba(0,0,0,0.1);
    transform:translate3d(0, -2px, 0)
  }

</style>
