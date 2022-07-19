<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: {
    toggleFilter() {
      return true;
    },
  },
  props: {
    location: {
      type: String,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
  },
});
</script>

<template>
  <div class="flex flex-col md:flex-row md:justify-between">
    <div class="flex">
      <img src="../assets/logo.png" alt="" class="self-center h-fit" />
    </div>
    <div
      class="flex md:block rounded-2xl shadow md:py-3 mt-10 md:mt-0 cursor-pointer"
      @click="$emit('toggleFilter')"
    >
      <span
        class="border-r px-4 py-5 text-xs sm:text-sm font-mulish flex-1"
        v-if="location !== ''"
        >{{ location }}</span
      >
      <span
        class="border-r px-4 py-5 text-xs sm:text-sm font-mulish text-gray-400 flex-1"
        v-else
        >Add Location</span
      >
      <span
        class="border-r px-4 py-5 text-xs sm:text-sm font-mulish flex-1"
        v-if="guests !== 0"
        >{{ guests }} Guests</span
      >
      <span
        class="border-r px-4 py-5 text-xs sm:text-sm font-mulish text-gray-400 flex-1"
        v-else
        >Add Guests</span
      >
      <span
        class="font-material text-red-500 align-middle px-4 text-2xl flex-none py-3 md:py-0"
        >search</span
      >
    </div>
  </div>
</template>
