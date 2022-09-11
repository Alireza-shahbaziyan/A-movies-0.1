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
      <img
        class="h-full w-full"
        :src="$store.state.data.banner_image"
        alt="CoverImage"
      />
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
        <img
          class="h-full w-full"
          :src="$store.state.data.cover_image"
          alt=""
        />
      </div>
    </div>
    <div class="text-white flex flex-col items-end">
      <div class="w-full text-xl text-center capitalize font-semibold font-serif">
        {{ $store.state.data.title }}
      </div>
      <div class="w-full text-center font-bold font-serif">
        {{ $store.state.data.year }}
      </div>
      <div class="w-full text-center font-semibold font-serif">
        <i class="bi bi-star-fill text-yellow-300 mx-1"></i>
        <span>
          {{ $store.state.data.rating }}
        </span>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  name: "HeaderDownloadPage",
};
</script>