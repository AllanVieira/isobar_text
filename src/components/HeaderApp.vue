<template>
  <div class="header">
    <input type="text" name="search" @keyup="search" v-model="textSearch">
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'HeaderApp',
    data: function () {
      return {
        textSearch: ''
      }
    },
    methods: {
      search () {
        this.$store.commit('searchBands', this.textSearch)
      }
    }
  }
</script>
<style type="text/css"></style>