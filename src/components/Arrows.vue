<template>
  <div id="container" class="container" :style="containerStyle">
    <div class="rectangle-up" :style="rectangleUpStyle"></div>
    <div class="rectangle-down" :style="rectangleDownStyle"></div>
  </div>
</template>

<script>

  export default {
    name: 'Arrows',
    props: ['size', 'color', 'direction'],
    data() {
      return {
        containerStyle: {
          height: 15 * this.size + 'px',
          width: 12 * this.size + 'px',
        },
        rectangleUpStyle: {
          backgroundColor: this.color,
          width: 10 * this.size + 'px',
          height: 2  + 'px',
          borderRadius: 2  + 'px',
          transformOrigin: this.direction == 'right' ? '100% 100%' : '0% 100%',
          transform: this.direction == 'right' ? 'rotate(40deg)' : 'rotate(-40deg)'
        },
        rectangleDownStyle: {
          backgroundColor: this.color,
          width: 10 * this.size + 'px',
          height: 2  + 'px',
          borderRadius: 2  + 'px',
          transformOrigin: this.direction == 'right' ? '100% 0%' : '0% 0%',
          transform: this.direction == 'right' ? 'rotate(-40deg)' : 'rotate(40deg)'
        },
      }
    },

    created() {

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
    height: 15px;
    width: 12px;
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center
  }

  .rectangle-up {
    width: 10px;
    height: 2px;
    background-color: gray;
    transform: rotate(40deg);
    transform-origin: 100% 100%;
    position: absolute;
  }

  .rectangle-down {
    width: 10px;
    height: 2px;
    background-color: gray;
    transform: rotate(-40deg);
    transform-origin: 100% 0%;
  }

</style>
