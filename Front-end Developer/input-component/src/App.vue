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
  <InputComp helperText="Some interesting text" />
  <InputComp helperText="Some interesting text" error />
  <InputComp startIcon="phone" />
  <InputComp endIcon="lock" />
</template>
