<template >
  <div class="w-full text-center flex justify-center my-4">
    <!-- -------------------------------------- -->
    <div class="btn-group">
      <button
        class="btn btn-outline btn-warning"
        v-for="SeasonNumber in seasions"
        :key="SeasonNumber"
        @click="SelectSeason(SeasonNumber)"
      >
        S{{ SeasonNumber }}
      </button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "SowSeasons",
  computed: mapState({
    seasions: (state) => state.data.seasions,
    seasion: (state) => state.Season,
  }),
  methods: {
    SelectSeason(SeasonNumber) {
      this.$store.commit("setSeason", SeasonNumber);
    },
  },
};
</script>
