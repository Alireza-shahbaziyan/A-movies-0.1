import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    data:Object,
    status:Boolean
  },
  getters: {
    sortData(state){
     var newData =  state.data.files.slice(0);
      newData.sort((a, b) => {
        if (a.number === b.number && a.seasion === b.seasion) {
            var x = a.quality;
            var y = b.quality;
            return x < y ? -1 : x > y ? 1 : 0;
        }
        if (a.seasion === b.seasion) {
            return a.number - b.number;
        }
        return a.seasion - b.seasion;
    });
    return newData
    }
  },
  mutations: {
    setData(state, value) {
      state.data = value.result
      state.status =value.status
    },
  },
  actions: {
    fetchData({ commit }) {
      axios.get('https://anilist.runflare.run/get_movie?imdb_id=11198330').then((result) => {
        commit('setData', result.data)
      }).catch((err) => {
        throw new Error(`API ${err}`);
      });

    }
  },
  modules: {
  }
})
