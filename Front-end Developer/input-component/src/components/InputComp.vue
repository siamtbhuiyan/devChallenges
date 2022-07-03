<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false, 
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputClass: this.error ? "input-error" : "input-default",
      labelClass: this.error ? "label-error" : "label-default",
      disableClass: this.disabled ? "disable" : "",
    }
  }
};
</script>


<template>
  <div class="flex flex-col-reverse">
    <input
      type="text"
      placeholder="Placeholder"
      :class="[inputClass, disableClass]"
      :disabled="disabled"
    />
    <label :class="labelClass">Label</label>
  </div>
</template>

<style>
input:focus + .label-default {
  color: rgb(59 130 246);
}

input:focus + .label-error {
  color: rgb(239 68 68);
}
</style>
