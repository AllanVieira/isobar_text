<template>
  <div>
    <div class="header">
      <input type="text" name="search" @keyup="search" v-model="textSearch">
    </div>
    <div class="results-header" v-if="bands.length > 0">    
      <p v-if="filtered">{{bands.length}} resultado(s)</p>
      <a href="#" @click.prevent="order"><img src="../assets/img/order_by.png"></a>
      <div class="order-options" v-if="chooseOrder">
        <a href="#" @click.prevent="orderByName">ORDEM ALFABÉTICA</a>
        <a href="#" @click.prevent="orderByViews">POPULARIDADE</a>      
      </div>
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
      },
      orderByViews () {
        this.$store.commit('orderByViews')
      },
      search () {
        this.$store.commit('searchBands', this.textSearch)
      }
    }
  }
</script>
<style type="text/css"></style>