<template>
  <div>
    arrows
  </div>
</template>

<script>

  export default {
    name: 'Arrows',
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


  .test {

  }

</style>
