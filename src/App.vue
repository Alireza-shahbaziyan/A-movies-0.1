

<template>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  <Navbar />
  <RouterView />
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./views/Navbar.vue";
export default{
  components:{
    Navbar
  },
  methods: {
    getData(){

    }
  },
}
</script>