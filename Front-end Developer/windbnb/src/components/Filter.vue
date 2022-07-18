<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: {
    toggleFilter() {
      return true;
    },
    setLocation(event: Event) {
      return true;
    },
    setGuests(adults: number, children: number) {
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
  data() {
    return {
      isLocationActive: true,
      isGuestActive: false,
      adults: 0,
      children: 0,
    };
  },
  methods: {
    toggleFilter(): void {
      this.$emit("toggleFilter");
    },
    filterLocation(): void {
      this.isLocationActive = !this.isLocationActive;
      this.isGuestActive = false;
    },
    filterGuest(): void {
      this.isLocationActive = false;
      this.isGuestActive = !this.isGuestActive;
    },
    adultIncrement(): void {
      this.adults++;
      this.$emit("setGuests", this.adults, this.children);
    },
    childrenIncrement(): void {
      this.children++;
      this.$emit("setGuests", this.adults, this.children);
    },
    adultDecrement(): void {
      if (this.adults !== 0) {
        this.adults--;
      }
      this.$emit("setGuests", this.adults, this.children);
    },
    childrenDecrement(): void {
      if (this.children !== 0) {
        this.children--;
      }
      this.$emit("setGuests", this.adults, this.children);
    },
    setLocation(event: Event): void {
      this.$emit("setLocation", event);
    },
  },
});
</script>
<template>
  <div class="w-full z-50 absolute top-0 left-0 bg-white">
    <div class="container mx-auto mt-24 mb-8">
      <div class="flex shadow rounded-2xl">
        <div
          class="flex-1 py-3 px-7"
          @click="filterLocation"
          :class="{ active: isLocationActive }"
        >
          <div class="uppercase text-[9px] font-bold font-mulish pt-1">
            location
          </div>
          <div class="text-sm" v-if="location !== ''">
            {{ location }}
          </div>
          <div class="text-sm text-gray-400" v-else>Add Location</div>
        </div>
        <div
          class="flex-1 py-3 px-7"
          @click="filterGuest"
          :class="{ active: isGuestActive }"
        >
          <div class="uppercase text-[9px] font-bold font-mulish pt-1">
            guests
          </div>
          <div class="text-sm" v-if="guests > 0">{{ guests }} Guests</div>
          <div class="text-sm text-gray-400" v-else>Add Guests</div>
        </div>
        <button
          type="submit"
          class="flex-none bg-red-500 text-white text-sm px-6 py-4 rounded-2xl my-1 hover:bg-red-400"
          @click="toggleFilter"
        >
          <span class="font-material text-xl align-bottom">search</span>
          <span class="align-text-bottom pl-2 text-base">Search</span>
        </button>
      </div>
      <div class="flex pt-10" v-if="isLocationActive || isGuestActive">
        <div class="flex-1 px-7" :class="{ invisible: isGuestActive }">
          <div class="pb-9 hover:cursor-pointer" @click="setLocation($event)">
            <span class="font-material text-xl align-bottom text-gray-700"
              >place</span
            >
            <span class="align-text-bottom pl-2">Helsinki, Finland </span>
          </div>
          <div class="pb-9 hover:cursor-pointer" @click="setLocation($event)">
            <span class="font-material text-xl align-bottom text-gray-700"
              >place</span
            >
            <span class="align-text-bottom pl-2">Turku, Finland </span>
          </div>
          <div class="pb-9 hover:cursor-pointer" @click="setLocation($event)">
            <span class="font-material text-xl align-bottom text-gray-700"
              >place</span
            >
            <span class="align-text-bottom pl-2">Oulu, Finland </span>
          </div>
          <div class="pb-9 hover:cursor-pointer" @click="setLocation($event)">
            <span class="font-material text-xl align-bottom text-gray-700"
              >place</span
            >
            <span class="align-text-bottom pl-2">Vaasa, Finland </span>
          </div>
        </div>
        <div class="flex-1 px-7" :class="{ invisible: isLocationActive }">
          <div>
            <div class="font-mulish font-bold text-sm">Adults</div>
            <div class="text-sm text-mulish text-gray-400">
              Ages 13 or above
            </div>
            <div class="text-gray-600 py-3">
              <span
                class="px-1.5 border rounded border-gray-400 hover:cursor-pointer"
                @click="adultDecrement"
                >-</span
              >
              <span class="px-4">{{ adults }}</span>
              <span
                class="px-1.5 border rounded border-gray-400 hover:cursor-pointer"
                @click="adultIncrement"
                >+</span
              >
            </div>
          </div>
          <div class="pt-12">
            <div class="font-mulish font-bold text-sm">Children</div>
            <div class="text-sm text-mulish text-gray-400">Ages 2-12</div>
            <div class="text-gray-600 py-3">
              <span
                class="px-1.5 border rounded border-gray-400 hover:cursor-pointer"
                @click="childrenDecrement"
                >-</span
              >
              <span class="px-4">{{ children }}</span>
              <span
                class="px-1.5 border rounded border-gray-400 hover:cursor-pointer"
                @click="childrenIncrement"
                >+</span
              >
            </div>
          </div>
        </div>
        <div class="w-32"></div>
      </div>
    </div>
  </div>
</template>
