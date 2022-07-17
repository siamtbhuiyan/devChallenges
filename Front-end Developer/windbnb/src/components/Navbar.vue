<script lang="ts">
export default {
  props: {
    filterVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleFilter() {
      this.filterVisible = !this.filterVisible;
      console.log(this.filterVisible);
    },
  },
};
</script>

<template>
  <div class="flex justify-between">
    <div class="flex">
      <img src="../assets/logo.png" alt="" class="self-center h-fit" />
    </div>
    <div class="rounded-2xl shadow py-3">
      <span class="border-r px-4 py-5 text-sm font-mulish"
        >Helsinki, Finland</span
      >
      <span class="border-r px-4 py-5 text-sm font-mulish">Add guests</span>
      <span
        class="font-material text-red-500 align-middle px-4 text-2xl cursor-pointer"
        @click="toggleFilter"
        >search</span
      >
    </div>
  </div>
</template>
