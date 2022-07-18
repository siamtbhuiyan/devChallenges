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
  // method: {
  //   toggleFilter() {
  //     this.$emit("toggleFilter");
  //   },
  // },
});
</script>

<template>
  <div class="flex justify-between">
    <div class="flex">
      <img src="../assets/logo.png" alt="" class="self-center h-fit" />
    </div>
    <div class="rounded-2xl shadow py-3">
      <span
        class="border-r px-4 py-5 text-sm font-mulish"
        v-if="location !== ''"
        >{{ location }}</span
      >
      <span class="border-r px-4 py-5 text-sm font-mulish" v-else
        >Add Location</span
      >
      <span class="border-r px-4 py-5 text-sm font-mulish" v-if="guests !== 0"
        >{{ guests }} Guests</span
      >
      <span class="border-r px-4 py-5 text-sm font-mulish" v-else
        >Add Guests</span
      >
      <span
        class="font-material text-red-500 align-middle px-4 text-2xl cursor-pointer"
        @click="$emit('toggleFilter')"
        >search</span
      >
    </div>
  </div>
</template>
