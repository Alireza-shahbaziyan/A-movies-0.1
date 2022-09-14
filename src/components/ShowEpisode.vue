<template>
  <div class="text-white w-full text-center">
    <div v-for="Episodes in ListEpisodes[0]" :key="Episodes">
      <div v-if="Episodes.seasion === selectedSeasion">
        <button class="btn btn-warning btn-wide my-2">
          S : {{ Episodes.seasion }} _ E : {{ Episodes.number }} _ Q :
          {{ Episodes.quality }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ShowEpisode",
  computed: {
    selectedSeasion() {
      return this.$store.state.seasion;
    },
    ...mapGetters({ ListEpisodes: "filterEpisode" }),
  },
  methods: {
    // SortEpisodes(value) {
    //   const newData =[]
    //   value.sort((a,b)=>{
    //     return a.number - b.number;
    //   })
    //   return value;
    // },
  },
};
</script>