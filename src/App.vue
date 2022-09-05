

<template>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  <Navbar />
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./views/Navbar.vue";

</script>