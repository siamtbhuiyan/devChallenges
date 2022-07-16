<script lang="ts">
import NavbarComp from "./components/Navbar.vue";
import PropertyListComp from "./components/PropertyList.vue";
import stays from "./data/stays.json";
export default {
  components: {
    NavbarComp,
    PropertyListComp,
  },
  data(): any {
    return {
      message: "Hello World!",
    };
  },
};
</script>
<template>
  <div class="container mx-auto my-8">
    <NavbarComp />
    <PropertyListComp />
  </div>
</template>
