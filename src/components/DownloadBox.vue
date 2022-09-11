<template>
  <!-- flex flex-wrap justify-evenly -->
  <div class="w-full flex flex-wrap justify-around">
    <!-- <div v-for="i in $store.getters.sortData" :key="i.mid">
    i.number
    </div> -->
    <div class="m-2" v-for="i in $store.getters.sortData" :key="i.mid">
      <button class="btn bg-amber-500 text-black">
        S:{{ i.seasion }} E:{{ i.number }} Q:{{i.quality}}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "DownloadBox",
};
</script>