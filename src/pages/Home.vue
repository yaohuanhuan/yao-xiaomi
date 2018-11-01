<template>
  <div style="">
    <div class="top-bg"></div>
    <div style="width: 100%;height: 40px;">
      <TopBar/>
    </div>
    <TopMenu style="z-index: 5"/>
    <div style="width: 100%;display: flex;align-items: center;justify-content: center;">
      <div style="width: 1226px;position:relative;display: flex">
        <Banner/>
        <LeftMenu/>
      </div>
    </div>
    <div style="width: 100%;display: flex;justify-content: center;background-color: #f5f5f5;padding-top: 20px">
      <MainList />
    </div>
  </div>

</template>

<script>

  import Arrows from '../components/Arrows'
  import Banner from '../components/Banner'
  import TopMenu from '../components/TopMenu'
  import LeftMenu from '../components/LeftMenu'
  import TopBar from '../components/TopBar'
  import MainList from '../components/MainList'

  export default {
    name: 'Home',
    components: {
      Arrows,
      Banner,
      TopMenu,
      LeftMenu,
      TopBar,
      MainList
    },
    data() {
      return {

      }
    },
    created() {
      this.fetchData()
    },
    mounted() {


    },
    watch: {
      '': 'fetchData'
    },
    methods: {
      fetchData() {


      },

    }
  }
</script>

<style scoped>

  .top-bg {
    width: 100%;
    height: 120px;
    background: url('../assets/images/top_bar.jpg') center;
  }



</style>
