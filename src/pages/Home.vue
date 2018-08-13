<template>
  <div>
    home123
    <Arrows></Arrows>
  </div>
</template>

<script>

  import Arrows from '../components/Arrows'

  export default {
    name: 'Home',
    components: {
      Arrows
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
        console.log(this.$router)
      }
    }
  }
</script>

<style scoped>

  .test {

  }

</style>
