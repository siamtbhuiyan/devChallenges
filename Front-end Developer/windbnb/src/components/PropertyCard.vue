<script lang="ts">
import { defineComponent, PropType } from "vue";
import Stay from "../types/stay";
export default defineComponent({
  props: {
    stay: Object as PropType<Stay>,
  },
});
</script>

<template>
  <div>
    <div class="h-64 sm:h-56 md:h-72">
      <img :src="stay?.photo" alt="" class="h-full w-full rounded-3xl" />
    </div>
    <div class="mt-4 mb-2 flex justify-between">
      <div>
        <div
          v-if="stay?.superHost"
          class="uppercase font-bold text-xs py-1 px-2 rounded-xl border border-gray-800 inline-block mr-3"
        >
          super host
        </div>
        <div class="inline-block text-gray-500 text-sm pr-1">
          {{ stay?.type }}
        </div>
        <div
          v-if="stay?.beds !== null"
          class="inline-block text-gray-500 text-sm"
        >
          . {{ stay?.beds }} beds
        </div>
      </div>
      <div class="inline-block">
        <span class="font-material text-red-500 text-xl align-bottom"
          >star</span
        >
        <span
          class="text-sm pl-2 font-montserrat align-text-bottom text-gray-700"
          >{{ stay?.rating }}</span
        >
      </div>
    </div>
    <div class="text-base font-semibold">
      {{ stay?.title }}
    </div>
  </div>
</template>
d
