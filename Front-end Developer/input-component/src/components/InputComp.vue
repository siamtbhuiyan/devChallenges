<template>
  <div class="flex flex-col-reverse">
    <input
      type="text"
      placeholder="Placeholder"
      class="input border-2 border-gray-400 py-4 px-3 rounded-lg outline-none w-52 hover:border-gray-800 focus:border-blue-500"
    />
    <label class="block capitalize">Label</label>
  </div>
</template>

<style>
input:focus + label {
  color: rgb(59 130 246);
}
</style>
