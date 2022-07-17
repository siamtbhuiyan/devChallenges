<script lang="ts">
import { defineComponent } from "vue";
import stays from "../data/stays.json";
import PropertyCardComp from "./PropertyCard.vue";
export default defineComponent({
  components: {
    PropertyCardComp,
  },
  data() {
    return {
      stays,
    };
  },
});
</script>

<template>
  <div class="my-16">
    <div class="flex justify-between mb-8">
      <h1 class="text-2xl font-bold font-montserrat inline-block">
        Stays in Finland
      </h1>
      <span class="text-sm text-gray-700">12+ stays</span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
      <div v-for="(stay, index) in stays" :key="index">
        <PropertyCardComp :stay="stay" />
      </div>
    </div>
  </div>
</template>
