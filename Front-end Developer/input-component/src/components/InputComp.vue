<script>
export default {
  components: {},
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    helperText: {
      type: String,
      default: "",
    },
    startIcon: {
      type: String,
      default: "",
    },
    endIcon: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputClass: this.error ? "input-error" : "input-default",
      labelClass: this.error ? "label-error" : "label-default",
      disableClass: this.disabled ? "disable" : "",
      helperClass: this.error ? "helper-error" : "helper-default",
      startIconClass: this.startIcon === "" ? "px-4" : "pl-10",
      endIconClass: this.endIcon === "" ? "px-4" : "pr-10",
    };
  },
};
</script>

<template>
  <div>
    <div class="input">
      <label :class="labelClass">Label</label>
      <span class="material-icons font-material start-icon">{{
        startIcon
      }}</span>
      <input
        type="text"
        placeholder="Placeholder"
        :class="[inputClass, disableClass, startIconClass, endIconClass]"
        :disabled="disabled"
        :value="defaultValue"
      />
      <span class="material-icons font-material end-icon">{{ endIcon }}</span>
      <label :class="helperClass">{{ helperText }}</label>
    </div>
  </div>
</template>
