import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state: {
    bandsData: [],
    bands: [],
    albums: [],
    bandId: null,
    filtered: false,
    band: null
  },
  mutations: {
    readData (state) {
      Vue.http.get('https://iws-recruiting-bands.herokuapp.com/api/albums').then((response) => {
        state.albums = response.body
      }, (response) => {})
      Vue.http.get('https://iws-recruiting-bands.herokuapp.com/api/bands').then((response) => {
        state.bands = response.body
        state.bandsData = response.body
      }, (response) => {})
    },
    orderByName (state) {
      state.bands.sort(function (a, b) {
        return a.name > b.name ? 1 : (b.name > a.name ? -1 : 0)
      })
    },
    orderByViews (state) {
      state.bands.sort(function (a, b) {
        return b.numPlays > a.numPlays ? 1 : (a.numPlays > b.numPlays ? -1 : 0)
      })
    },
    searchBands (state, search) {
      if (search === '') {
        state.bands = state.bandsData
        state.filtered = false
      } else {
        state.bands = state.bandsData.filter(function (band) {
          return band.name.toUpperCase().indexOf(search.toUpperCase()) > -1
        })
        state.filtered = true
      }
    },
    viewBand (state, band) {
      state.band = band
      state.band.albums = state.albums.filter(function (album) {
        return album.band === band.id
      })
    }
  }
})
