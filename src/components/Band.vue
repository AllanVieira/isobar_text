<template>
  <div class="band">
    <img :src="band.image">
    <p>{{band.genre}}</p>
    <p>{{band.numPlays}}</p>
    <p>{{band.biography}}</p>
    <div class="albums">
      <div class="album" v-for="album in band.albums">
        <img :src="album.image">
        <p>{{album.name}}</p>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Band',
    computed: {
      band () {
        return this.$store.state.band
      }
    }
  }
</script>
<style type="text/css"></style>