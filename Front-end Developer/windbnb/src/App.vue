<script lang="ts">
import { defineComponent } from "vue";
import NavbarComp from "./components/Navbar.vue";
import PropertyListComp from "./components/PropertyList.vue";
import FilterComp from "./components/Filter.vue";
export default defineComponent({
  components: {
    NavbarComp,
    PropertyListComp,
    FilterComp,
  },
  data(): any {
    return {
      filterVisible: false,
    };
  },
});
</script>
<template>
  <div class="container mx-auto my-8 2xs:px-2 lg:px-10">
    <div v-if="filterVisible"><FilterComp /></div>
    <NavbarComp :filterVisible="filterVisible" />
    <PropertyListComp />
  </div>
</template>
