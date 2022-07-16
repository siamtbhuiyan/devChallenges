<script lang="ts">
import { defineComponent } from "vue";
import stays from "../data/stays.json";
export default defineComponent({
  data(): any {
    return {
      message: "HELLO",
      stays: stays,
    };
  },
  methods: {
    increment(): void {
      this.message = "HEY";
    },
    convert(): void {
      this.stays = JSON.parse(stays);
    },
  },
});
</script>

<template>
  <div class="my-16">
    <h1 class="text-2xl font-bold font-montserrat">Stays in Finland</h1>
    <div>
      <div :v-for="stay in stays" :key="stay">{{ stay }}</div>
    </div>
    <div>{{ message }}</div>
    <button @click="convert">Hello</button>
  </div>
</template>
