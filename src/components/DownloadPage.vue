<template>
  <div class="w-full lg:flex lg:flex-col lg:items-center ">
    <div class="lg:w-1/2">
      <HeaderDownloadPage />
      <div class="body min-h-screen">
        <AboutBox />
        <ShowSeasons />
        <ShowEpisode />
      </div>
    </div>
  </div>
</template>
<script>
import HeaderDownloadPage from "./HeaderDownloadPage.vue";
import AboutBox from "./AboutBox.vue";
import ShowSeasons from "./ShowSeasons.vue";
import ShowEpisode from "./ShowEpisode.vue";

export default {
  name: "DownloadPage",

  // <<beforeCreate>> Called synchronously immediately after the instance has been initialized,
  // before data observation and event/watcher setup.
  beforeCreate() {
    this.$store.dispatch("fetchData"); //call store => index.js => action => fetchData
  },
  components: { HeaderDownloadPage, AboutBox, ShowSeasons, ShowEpisode },
};
</script>
<style>
.body {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(28, 1, 1, 1) 33%,
    rgba(19, 0, 0, 1) 38%,
    rgba(19, 10, 6, 1) 100%
  );
}
</style>