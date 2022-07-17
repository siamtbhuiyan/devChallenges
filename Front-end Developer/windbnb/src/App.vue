<script lang="ts">
import { defineComponent } from "vue";
import NavbarComp from "./components/Navbar.vue";
import PropertyListComp from "./components/PropertyList.vue";
export default defineComponent({
  components: {
    NavbarComp,
    PropertyListComp,
  },
  data(): any {
    return {
      message: "Hello World!",
    };
  },
});
</script>
<template>
  <div class="container mx-auto my-8">
    <NavbarComp />
    <PropertyListComp />
  </div>
</template>
