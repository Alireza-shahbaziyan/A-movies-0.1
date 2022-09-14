<template>
  <div
    class="
      relative
      w-full
      h-72
      md:h-96
      lg:h-screen
      flex flex-row
      justify-around
      items-center
    "
  >
    <!-- ---------Background----------- -->
    <div class="w-full -z-10 h-full absolute">
      <img class="h-full w-full" :src="banner_image" alt="banner_image" />
    </div>
    <!-- --------Items--------- -->
    <div class="text-white">
      <div
        class="
          capitalize
          border
          rounded-lg
          w-32
          md:w-44
          lg:w-60
          mx-4
          overflow-hidden
          border-yellow-400
        "
      >
        <img class="h-full w-full" :src="cover_image" alt="cover_image" />
      </div>
    </div>
    <div class="text-white flex flex-col items-end">
      <div
        class="w-full text-xl text-center capitalize font-semibold font-serif"
      >
        {{ title }}
      </div>
      <div class="w-full text-center font-bold font-serif">
        {{ year }}
      </div>
      <div class="w-full text-center font-semibold font-serif">
        <i class="bi bi-star-fill text-yellow-300 mx-1"></i>
        <span>
          {{ rating }}
        </span>
      </div>
    </div>
  </div>
</template>
  <script>
import { mapState } from "vuex";
export default {
  name: "HeaderDownloadPage",
  computed: mapState({
    banner_image: (state) => state.data.banner_image,
    cover_image: (state) => state.data.cover_image,
    title: (state) => state.data.title,
    year: (state) => state.data.year,
    rating: (state) => state.data.rating,
  }),
};
</script>