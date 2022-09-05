<template>
  <div class="relative w-full h-72 md:h-96 lg:h-screen flex flex-row justify-around items-center ">
    <!-- ---------Background----------- -->
    <div class="w-full -z-10 h-full absolute">
        <img class="h-full w-full" :src="CoverIMG" alt="CoverImage">
    </div>
    <!-- --------Items--------- -->
    <div class="text-white">
        <div class="capitalize border rounded-lg w-32 md:w-44 lg:w-60 overflow-hidden border-emerald-400">
            <img class="h-full  w-full" :src="image" alt="">
        </div>
    </div>
    <div class="text-white flex flex-col items-end">
        <div class="capitalize font-semibold font-serif">{{mName}}</div>
        <div class="capitalize">خاندان اژدها </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderDL",
  data() {
    return {
        mName:'house of the dragon',
      CoverIMG: "https://static.hbo.com/2022-06/house-of-the-dragon-ka-1920.jpg",
      image:"https://m.media-amazon.com/images/M/MV5BZDBkZjRiNGMtZGU2My00ODdkLWI0MGYtNGU4MmJjN2MzOTkxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
    };
  },
};
</script>
