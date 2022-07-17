<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<template>
  <div class="h-[45vh] w-full z-50 absolute top-0 left-0 bg-white">
    <div class="container mx-auto mt-24">
      <div class="flex shadow rounded-2xl border-4">
        <div class="flex-1 py-3 px-7">
          <div class="uppercase text-[9px] font-bold font-mulish pt-1">
            location
          </div>
          <div class="text-sm">Add Location</div>
        </div>
        <div class="flex-1 py-3 px-7">
          <div class="uppercase text-[9px] font-bold font-mulish pt-1">
            guests
          </div>
          <div class="text-sm">Add Guests</div>
        </div>
        <button
          type="submit"
          class="flex-none bg-red-500 text-white text-sm px-6 py-4 rounded-2xl my-1"
        >
          <span class="font-material text-xl align-bottom">search</span>
          <span class="align-text-bottom pl-2 text-base">Search</span>
        </button>
      </div>
    </div>
  </div>
</template>
