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
    size: {
      type: String,
      default: "md",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    multiline: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Number,
      default: 1,
    },
    title: {
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
      startIconClass:
        this.size === "sm"
          ? this.startIcon === ""
            ? "px-3"
            : "pl-9"
          : this.startIcon === ""
          ? "px-4"
          : "pl-10",
      endIconClass:
        this.size === "sm"
          ? this.endIcon === ""
            ? "px-3"
            : "pr-9"
          : this.endIcon === ""
          ? "px-4"
          : "pr-10",
      sizeClass: this.size === "sm" ? "py-2" : "py-4",
      iconClass: this.size === "sm" ? "top-8" : "top-10",
      fullWidthClass: this.fullWidth ? "w-full" : "w-52",
      rows: this.row,
    };
  },
};
</script>

<template>
  <div>
    <p class="py-3 text-gray-400">{{ title }}</p>
    <div class="input" :class="fullWidthClass">
      <label :class="labelClass">Label</label>
      <span
        class="material-icons font-material start-icon"
        :class="iconClass"
        >{{ startIcon }}</span
      >
      <span v-if="multiline">
        <textarea
          type="text"
          placeholder="Placeholder"
          :class="[
            inputClass,
            disableClass,
            startIconClass,
            endIconClass,
            sizeClass,
            fullWidthClass,
          ]"
          :disabled="disabled"
          :value="value"
          :rows="rows"
          style="overflow: hidden; resize: none"
        ></textarea>
      </span>
      <span v-else>
        <input
          type="text"
          placeholder="Placeholder"
          :class="[
            inputClass,
            disableClass,
            startIconClass,
            endIconClass,
            sizeClass,
            fullWidthClass,
          ]"
          :disabled="disabled"
          :value="value"
        />
      </span>
      <span class="material-icons font-material end-icon" :class="iconClass">{{
        endIcon
      }}</span>
      <label :class="helperClass">{{ helperText }}</label>
    </div>
  </div>
</template>
