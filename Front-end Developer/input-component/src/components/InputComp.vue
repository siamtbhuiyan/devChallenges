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
    },
    helperText: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      inputClass: this.error ? "input-error" : "input-default",
      labelClass: this.error ? "label-error" : "label-default",
      disableClass: this.disabled ? "disable" : "",
      helperClass: this.error ? "helper-error" : "helper-default",
    }
  }
};
</script>


<template>
<div class="flex flex-col-reverse">
  <label :class="helperClass">{{ helperText }}</label>
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
input:focus ~ .label-default {
  color: rgb(59 130 246);
}
</style>
