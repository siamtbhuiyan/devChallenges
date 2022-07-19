<script lang="ts">
import { defineComponent } from "vue";
import NavbarComp from "./components/Navbar.vue";
import PropertyListComp from "./components/PropertyList.vue";
import FilterComp from "./components/Filter.vue";
import FooterComp from "./components/Footer.vue";
export default defineComponent({
  components: {
    NavbarComp,
    PropertyListComp,
    FilterComp,
    FooterComp,
  },
  data(): { filterVisible: boolean; location: string; guests: number } {
    return {
      filterVisible: false,
      location: "",
      guests: 0,
    };
  },
  methods: {
    toggleFilter() {
      this.filterVisible = !this.filterVisible;
    },
    setLocation(event: any) {
      if (event.target.innerHTML.includes("Helsinki")) {
        this.location = "Helsinki, Finland";
      } else if (event.target.innerHTML.includes("Turku")) {
        this.location = "Turku, Finland";
      } else if (event.target.innerHTML.includes("Oulu")) {
        this.location = "Oulu, Finland";
      } else if (event.target.innerHTML.includes("Vaasa")) {
        this.location = "Vaasa, Finland";
      }
    },
    setGuests(adults: number, children: number) {
      this.guests = adults + children;
    },
    removeFilter() {
      this.filterVisible = false;
    },
    cancelFilter() {
      this.location = "";
      this.guests = 0;
      this.filterVisible = false;
    },
  },
});
</script>
<template>
  <div class="container my-8 mx-auto lg:px-10 md:px-6 sm:px-2">
    <div class="min-h-[calc(100vh-136px)]">
      <div v-if="filterVisible">
        <FilterComp
          @toggleFilter="toggleFilter"
          :guests="guests"
          :location="location"
          @setLocation="setLocation"
          @setGuests="setGuests"
          @cancelFilter="cancelFilter"
        />
      </div>
      <NavbarComp
        @toggleFilter="toggleFilter"
        :guests="guests"
        :location="location"
      />
      <PropertyListComp
        :location="location"
        :guests="guests"
        :filterVisible="filterVisible"
        @removeFilter="removeFilter"
      />
    </div>

    <FooterComp />
  </div>
</template>
