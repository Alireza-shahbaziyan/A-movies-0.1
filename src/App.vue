

<template>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  <div class="main -z-10">
    <RouterView />
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<!-- <style>
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
</style> -->