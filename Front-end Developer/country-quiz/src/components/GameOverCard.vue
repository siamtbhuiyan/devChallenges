<script setup>
const props = defineProps(["score"]);
const emits = defineEmits(["startNewGame"]);
const startNewGame = () => {
  emits("startNewGame");
};
</script>

<template>
  <div class="w-[464px]">
    <h1 class="country-quiz">Country Quiz</h1>
    <div class="quiz-card flex items-center flex-col">
      <img src="../assets/undraw_winners_ao2o 2.svg" alt="" />
      <div class="pt-16 text-[#1D355D] font-bold text-5xl">Results</div>
      <div class="pt-6 text-lg text-[#1D355D] pb-16">
        You got
        <span class="text-[#6FCF97] font-bold text-4xl">{{ score }}</span>
        correct answers
      </div>
      <button class="try-again" @click="startNewGame">Try again</button>
    </div>
  </div>
</template>
