// import axios from 'axios'
import { createStore } from 'vuex'
import ManageServices from '../Services/ManageServices'

export default createStore({
  state: {
    data: [],
    status: Boolean,
    seasion: 1,
    Episodes: []

  },
  getters: {
    filterEpisode(state) {
      return state.Episodes.map(events => events.sort((a, b) => {
        return a.number - b.number;
      }))
    }
  },
  mutations: {
    setData(state, value) {
      state.data = value.result
      state.status = value.status
      state.Episodes.push(value.result.files)
    },
    setSeason(state, seasionNumber) {
      state.seasion = seasionNumber
    },
  },
  actions: {
    async fetchData({ commit }) {
      await ManageServices.getDetailsMovie()
        .then((result) => {
          commit('setData', result.data)
        }).catch((err) => {
          throw new Error(`API ${err}`);
        });

    }
  },
  modules: {
  }
})
