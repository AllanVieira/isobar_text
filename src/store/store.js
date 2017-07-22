import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state: {
    bands: [],
    albums: [],
    bandId: null
  },
  mutations: {
    readData (state) {
      Vue.http.get('https://iws-recruiting-bands.herokuapp.com/api/bands').then((response) => {
        state.bands = response.body
      }, (response) => {})
    }
  }
})
