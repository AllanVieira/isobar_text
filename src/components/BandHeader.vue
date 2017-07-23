<template>
  <div class="header header-band">
    <a href="#" @click.prevent="back"><</a>
    <img src="../assets/img/logo.png">
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'BandHeader',
    methods: {
      back () {
        this.$router.push('/')
      }
    }
  }
</script>
<style type="text/css">
  .header-band img{
    width: 110px;
  }
  .header-band {
    padding: 20px 10px;
  }
  .header a {
    text-decoration: none;
    float: left;
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
</style>