<template>
  <div>
    <results-header></results-header>
    <div v-if="bands.length === 0" class="no-result">
      <p>Sem Resultados...</p>
      <img src="../assets/img/no_results.png">
    </div>
    <div v-if="bands.length > 0">          
      <div class="results">    
        <template v-for="band in bands">
          <div class="bands" @click="openBand(band)">
            <img :src="band.image">
            <h1>{{band.name}}</h1>
            <p>{{band.numPlays}}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import ResultsHeader from '@/components/ResultsHeader.vue'

  export default {
    name: 'Results',
    components: {ResultsHeader},
    computed: {
      bands () {
        return this.$store.state.bands
      }
    },
    methods: {
      openBand (band) {
        this.$store.commit('viewBand', band)
        this.$router.push('/band/' + band.id)
      }
    }
  }
</script>
<style type="text/css">  
</style>
