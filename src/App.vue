<template>
  <div id="app">    
    <div class="content">
      <router-view></router-view>       
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function () {
    this.$store.commit('readData')
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
</style>
