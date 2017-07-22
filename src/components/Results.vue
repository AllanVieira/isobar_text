<template>
  <div>
    <p v-for="band in bands">{{band.id}}</p>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'search',
    computed: {
      bands () {
        return this.$store.state.bands
      }
    }
  }
</script>
<style type="text/css">  
</style>
