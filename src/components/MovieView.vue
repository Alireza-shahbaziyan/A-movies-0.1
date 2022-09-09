<template>
  <HeaderDownloadPage />
  <div class="body">
    <AboutBox />
  </div>
</template>
<script>
  // import components
import HeaderDownloadPage from "./HeaderDownloadPage.vue";
import AboutBox from "./AboutBox.vue";

export default {
  name: "MovieView", // package name
  // <<beforeCreate>> Called synchronously immediately after the instance has been initialized, before data observation and event/watcher setup.
  beforeCreate() { 
    this.$store.dispatch("fetchData");
  },
  components: { HeaderDownloadPage, AboutBox },
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