<template>
  <div>
    <div class="header header-search">
      <div class="search-container">
        <input type="text" name="search" @keyup="search" v-model="textSearch">      
        <img src="../assets/img/search.png">
      </div>
      <img class="logo" src="../assets/img/logo.png">
    </div>
    <div class="results-header" v-if="bands.length > 0">    
      <p v-if="filtered">{{bands.length}} resultado(s)</p>      
    </div>
    <a class="btn-order" href="#" @click.prevent="order"><img src="../assets/img/order_by.png"></a>
    <div class="order-options" v-if="chooseOrder">
      <a href="#" @click.prevent="orderByName">ORDEM ALFABÉTICA</a>
      <a href="#" @click.prevent="orderByViews">POPULARIDADE</a>      
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'ResultsHeader',
    data: function () {
      return {
        chooseOrder: false,
        textSearch: ''
      }
    },
    computed: {
      bands () {
        return this.$store.state.bands
      },
      filtered () {
        return this.$store.state.filtered
      }
    },
    methods: {
      order () {
        this.chooseOrder = !this.chooseOrder
      },
      orderByName () {
        this.$store.commit('orderByName')
        this.chooseOrder = false
      },
      orderByViews () {
        this.$store.commit('orderByViews')
        this.chooseOrder = false
      },
      search () {
        this.$store.commit('searchBands', this.textSearch)
      }
    }
  }
</script>
<style type="text/css">
  .search-container {
    float: left;
    background: white;
    height: 22px;
    width: 60%;
  }
  .search-container {
    width: 205px;
  }
  .search-container img{
    width: 20px;
    float: right;
    margin-right: 5px;
  }
  .header input {
    float: left;
    border: none;    
    height: 20px;
    font-size: 14px;
    margin-left: 10px;  
  }
  .header input:focus {
    outline: none;
  }
  .header-search > .logo {
    float: right;
    width: 100px;
    margin-right: 15px;
  }
  .btn-order {
    position: absolute;
    top: 60px;
    right: 10px;
  }
  .btn-order img{
    width: 30px;
    float: right;
    margin-right: 10px;
  }
  .order-options {
    position: absolute;
    background-color: gray;
    width: 150px;
    top: 85px;
    right: 20px;
  }
  .order-options a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 13px;
    line-height: 30px;
  }
  .results-header {
    float: left;
    width: 100%;
    overflow: visible;
    background: #dedcdc;
  }
  .results-header p {
    text-align: left;
    margin-left: 20px;
    color: gray;
    line-height: 30px;
  }
</style>