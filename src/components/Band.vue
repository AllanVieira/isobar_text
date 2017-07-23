<template>
  <div>
    <band-header></band-header>
    <div class="band">
      <img :src="band.image">
      <div class="details">
        <p class="genre">{{band.genre}}</p>
        <p class="views">{{band.numPlays}}</p>
      </div>
      <p class="biography">{{band.biography}}</p>
      <div class="albums">
        <div class="album" v-for="album in band.albums">
          <img :src="album.image">
          <p>{{album.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import BandHeader from '@/components/BandHeader.vue'

  export default {
    name: 'Band',
    components: {BandHeader},
    computed: {
      band () {
        return this.$store.state.band
      }
    }
  }
</script>
<style type="text/css">
  .band img{
    width: 100%;
  }
  .details {
    height: 30px;
    padding: 0px 20px;
  }
  .details p {        
    color: #909090;
    font-weight: bold;
  }
  .details .genre{
    float: left;
  }
  .details .views{
    float: right;
  }
  .biography{
    text-align: justify;
    padding: 0px 20px;
  }
</style>