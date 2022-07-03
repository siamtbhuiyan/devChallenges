<script>
import InputComp from "./components/InputComp.vue";
export default {
  components: {
    InputComp,
  },
};
</script>

<template>
  <InputComp />
  <InputComp error />
  <InputComp disabled />
</template>
