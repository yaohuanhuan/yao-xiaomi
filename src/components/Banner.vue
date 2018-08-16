<template>
  <div class="container">
    <img id="img4" class="image-item" src="../assets/images/5a.jpg"/>
    <img id="img3" class="image-item" src="../assets/images/4a.jpg"/>
    <img id="img2" class="image-item" src="../assets/images/3a.jpg"/>
    <img id="img1" class="image-item" src="../assets/images/2a.jpg"/>
    <img id="img0" class="image-item" src="../assets/images/1a.jpg"/>
    <div class="arrows-container" v-on:click="switchImg('back')" style="top: 50%;margin-top: -35px;left: 240px">
      <Arrows :color="color" :size="size" direction="left"></Arrows>
    </div>
    <div class="arrows-container" v-on:click="switchImg('go')" style="top: 50%;margin-top: -35px;right: 0px">
      <Arrows :color="color" :size="size" direction="right"></Arrows>
    </div>
    <div style="position: absolute;bottom: 25px;right: 35px;">
      <div class="dot-container">
        <div class="dot" v-for="(item,index) in dots">
          <div class="index-dot" :id="item.id" :key="item.index" v-if="index == currentPage"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import Arrows from '../components/Arrows'

  export default {
    name: 'Banner',
    components: {
      Arrows,
    },
    data() {
      return {
        currentPage: 0,
        transformInterval: 4000,
        animationDuration: 800,
        dots: [
          {id: '#dot0'},
          {id: '#dot1'},
          {id: '#dot2'},
          {id: '#dot3'},
          {id: '#dot4'},
        ],
        Interval: null,
        color: '#b3afa5',
        size: 2,
      }
    },
    created() {
      this.initData();
    },

    methods: {
      initData() {
        //初始化状态
        $("#img0").fadeIn(100);
        $("#img1").fadeOut(100);
        $("#img2").fadeOut(100);
        $("#img3").fadeOut(100);
        $("#img4").fadeOut(100);

        this.currentPage = 0;

        this.Interval = setInterval(() => {
          if (this.currentPage == 4) {
            $("#img4").fadeOut(this.animationDuration);
            $("#img0").fadeIn(this.animationDuration);
            this.currentPage = 0;
          } else {
            for (let i = 0; i < 5; i++) {
              if (this.currentPage == i) {
                $("#img" + i).fadeOut(this.animationDuration);
                $("#img" + (i + 1)).fadeIn(this.animationDuration);
              }
            }
            this.currentPage += 1;
          }

        }, this.transformInterval)
      },
      switchImg(tag) {

        if ($("#img"+this.currentPage).css('opacity') != 1){
          return
        }

        if (tag === 'go') {
          if (this.currentPage == 4) {
            $("#img4").fadeOut(this.animationDuration);
            $("#img0").fadeIn(this.animationDuration);
            this.currentPage = 0;
          } else {
            for (let i = 0; i < 5; i++) {
              if (this.currentPage == i) {
                $("#img" + i).fadeOut(this.animationDuration);
                $("#img" + (i + 1)).fadeIn(this.animationDuration);
              }
            }
            this.currentPage += 1;
          }
        }
        if (tag === 'back') {
          if (this.currentPage == 0) {
            $("#img4").fadeIn(this.animationDuration);
            $("#img0").fadeOut(this.animationDuration);
            this.currentPage = 4;
          } else {
            for (let i = 0; i < 5; i++) {
              if (this.currentPage == i) {
                $("#img" + i).fadeOut(this.animationDuration);
                $("#img" + (i - 1)).fadeIn(this.animationDuration);
              }
            }
            this.currentPage -= 1;
          }
        }
      },
    }
  }
</script>

<style scoped>

  .container {
    width: 1226px;
    height: 460px;
    position: relative
  }

  .image-item {
    width: 1226px;
    height: 460px;
    position: absolute;
  }

  .dot-container {
    width: 90px;
    display: flex;
    background-color: transparent;
    justify-content: space-between;

  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: #a8a8aa;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .index-dot {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #e8e8eb
  }

  .arrows-container {
    background-color: transparent;
    height: 69px;
    width: 41px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrows-container:hover {
    background-color: gray;
    opacity: 0.5;
  }

</style>
