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
  },
});
</script>
<template>
  <div class="container mx-auto my-8 2xs:px-2 lg:px-10">
    <div v-if="filterVisible">
      <FilterComp
        @toggleFilter="toggleFilter"
        :guests="guests"
        :location="location"
        @setLocation="setLocation"
        @setGuests="setGuests"
      />
    </div>
    <NavbarComp
      @toggleFilter="toggleFilter"
      :guests="guests"
      :location="location"
    />
    <PropertyListComp />
  </div>
</template>
