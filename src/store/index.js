import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    data: null,
    id: null,
    title: null,
    coverImage: null,
    bannerImage: null,
    description: null,
    status:null
  },
  getters: {
  },
  mutations: {
    setData(state, value) {
      state.data = value.data;
      state.id = value.data.movie_id;
      state.title = value.data.title;
      state.description = value.data.plot;
      state.coverImage = value.data.cover_image;
      state.bannerImage = value.data.banner_image;
      state.status = value.data.commit
    },
  },
  actions: {
    fetchData({ commit }) {
      axios.get('https://ackerman.ir/api/test.php/').then((result) => {
        commit('setData', result)
      }).catch((err) => {
        throw new Error(`API ${err}`);
      });

    }
  },
  modules: {
  }
})
