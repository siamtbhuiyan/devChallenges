<script lang="ts">
import { defineComponent } from "vue";
import stays from "../data/stays.json";
import PropertyCardComp from "./PropertyCard.vue";
import Stay from "../types/stay";

export default defineComponent({
  components: {
    PropertyCardComp,
  },
  data(): { stays: Stay[] } {
    return {
      stays: stays as Stay[],
    };
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
  methods: {
    filterStays(location: string, guests: number): Stay[] {
      if (location === "" && guests === 0) {
        return this.stays;
      }
      if (location === "") {
        const temp = this.stays.filter((s: Stay) => {
          if (s.maxGuests >= guests) {
            return s;
          }
        });
        return temp;
      }
      const filteredStays = this.stays.filter((s: Stay) => {
        if (
          s.maxGuests >= guests &&
          location.includes(s.city) &&
          location.includes(s.country)
        ) {
          return s;
        }
      });
      return filteredStays;
    },
  },
});
</script>

<template>
  <div class="my-16">
    <div class="flex justify-between mb-8">
      <h1 class="text-2xl font-bold font-montserrat inline-block">
        Stays in Finland
      </h1>
      <span class="text-sm text-gray-700"
        >{{ filterStays(location, guests).length }}+ stays</span
      >
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
      <div v-for="(stay, index) in filterStays(location, guests)" :key="index">
        <PropertyCardComp :stay="stay" />
      </div>
    </div>
  </div>
</template>
