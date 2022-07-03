<script>
export default {
  props: {
    state: {
      type: String,
      required: true,
      default: "default" 
    }
  },
  data() {
    return {
      inputClass: `input-${this.state}`,
      labelClass: `label-${this.state}`
    }
  }
};
</script>


<template>
  <div class="flex flex-col-reverse">
    <input
      type="text"
      placeholder="Placeholder"
      :class="inputClass"
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
