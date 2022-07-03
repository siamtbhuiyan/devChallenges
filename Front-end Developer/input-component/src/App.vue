<script>
import InputComp from "./components/InputComp.vue";
export default {
  components: {
    InputComp,
  },
};
</script>

<template>
  <div class="container mx-auto py-14">
    <h1 class="font-poppins text-2xl font-medium text-gray-900">Inputs</h1>
    <div class="grid grid-cols-3 py-6">
      <InputComp title="<Input />" />
      <InputComp title="&:hover" />
      <InputComp title="&:focus" />
    </div>
    <div class="grid grid-cols-3 py-6">
      <InputComp error title="<Input error />" />
      <InputComp error title="&:hover" />
      <InputComp error title="&:focus" />
    </div>
    <div class="grid grid-cols-3 py-6">
      <InputComp disabled title="<Input disabled />" />
    </div>
    <div class="grid grid-cols-2 py-6">
      <InputComp
        helperText="Some interesting text"
        title="<Input helperText=”Some interesting text” />"
      />
      <InputComp
        helperText="Some interesting text"
        error
        title="<Input helperText=”Some interesting text” error />"
      />
    </div>
    <div class="grid grid-cols-2 py-6">
      <InputComp startIcon="phone" title="<Input startIcon />" />
      <InputComp endIcon="lock" title="<Input endIcon />" />
    </div>
    <div class="grid grid-cols-2 py-6">
      <InputComp value="Text" title="<Input value='Text' />" />
    </div>
    <div class="grid grid-cols-2 py-6">
      <InputComp size="sm" title="<Input size=”sm” />" />
      <InputComp size="md" title="<Input size=”md” />" />
    </div>
    <div class="grid grid-cols-1 py-6">
      <InputComp fullWidth title="<Input fullWidth />" />
    </div>
    <div class="grid grid-cols-1 py-6">
      <InputComp
        multiline
        row="4"
        title="<Input multiline row=”4” />
"
      />
    </div>
    <a href="https://mui.com/material-ui/material-icons/" class="text-gray-400"
      >Icons: https://mui.com/material-ui/material-icons/</a
    >
    <p class="pt-12 text-gray-400">
      created by
      <a
        href="https://devchallenges.io/portfolio/siamtbhuiyan"
        class="font-bold"
        >@siamtbhuiyan</a
      >
      - devChallenges
    </p>
  </div>
</template>
