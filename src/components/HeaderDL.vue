<template>
  <div class="relative w-full h-72 md:h-96 lg:h-screen flex flex-row justify-around items-center ">
    <!-- ---------Background----------- -->
    <div class="w-full -z-10 h-full absolute">
        <img class="h-full w-full" :src="data.banner_image" alt="CoverImage">
    </div>
    <!-- --------Items--------- -->
    <div class="text-white">
        <div class="capitalize border rounded-lg w-32 md:w-44 lg:w-60 overflow-hidden border-emerald-400">
            <img class="h-full  w-full" :src="data.cover_image" alt="">
        </div>
    </div>
    <div class="text-white flex flex-col items-end">
        <div class="capitalize font-semibold font-serif">{{data.title}}</div>
        <div class="capitalize">خاندان اژدها </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderDL",
  props:{
    data:Object
  },
  mounted(){
    console.log(this.data);
  }
};
</script>
