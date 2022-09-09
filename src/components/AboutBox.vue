<template>
  <div class="flex flex-col justify-around w-full">
    <div class="my-2 flex justify-between">
      <div class="btn btn-warning mx-4">Trailer</div>
      <div class="mx-4 text-success">
        <a href="#">
          <label class="swap swap-flip text-3xl">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" />

            <div class="swap-off"><i class="bi bi-bookmark-dash"></i></div>
            <div class="swap-on"><i class="bi bi-bookmark-check-fill"></i></div>
          </label>
        </a>
      </div>
    </div>
    <div class="font-serif text-slate-100 p-4 text-lg">
      {{ $store.state.description }}....
    </div>
    <div
      class="
        flex
        font-bold
        justify-start
        items-center
        border border-t
        text-yellow-200
        border-black
        w-full
      "
    >
      <div class="mx-1">
        <!-- circle -->
        <i class="bi bi-info-circle text-xl"></i>
      </div>
      {{ $store.state.status }}
    </div>
  </div>
</template>
<script>
export default {
  name: "aboutBox",
};
</script>