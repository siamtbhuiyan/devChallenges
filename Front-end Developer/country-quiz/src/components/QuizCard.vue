<script setup>
import { reactive, ref } from "vue";
const props = defineProps(["currentQuestion"]);
const emits = defineEmits(["increaseScore", "incorrectAnswer", "nextQuestion"]);
const list = ["A", "B", "C", "D"];
let countryList = reactive([
  props.currentQuestion.options[0].option,
  props.currentQuestion.options[1].option,
  props.currentQuestion.options[2].option,
  props.currentQuestion.options[3].option,
]);
const countries = ref([]);
const button = ref(null);
const validateAnswer = (event) => {
  countryList = [
    props.currentQuestion.options[0].option,
    props.currentQuestion.options[1].option,
    props.currentQuestion.options[2].option,
    props.currentQuestion.options[3].option,
  ];
  let ans;
  props.currentQuestion.options.forEach((q) => {
    if (q.correct) {
      ans = q.option;
    }
  });
  if (event.target.innerText.includes(ans)) {
    countryList.forEach((country) => {
      if (country === ans) {
        countries.value[country].classList.add("correct");
      }
    });
    countryList.forEach((country) => {
      countries.value[country].classList.toggle("pointer-events-none");
    });
    button.value.classList.remove("hidden");
    emits("increaseScore");
  } else {
    countryList.forEach((country) => {
      if (country === ans) {
        countries.value[country].classList.add("correct");
      } else if (event.target.innerText.includes(country)) {
        countries.value[country].classList.add("incorrect");
      }
    });
    countryList.forEach((country) => {
      countries.value[country].classList.toggle("pointer-events-none");
    });
    button.value.classList.remove("hidden");
  }
};
const handleNext = () => {
  let correct = true;
  countryList.forEach((country) => {
    countries.value[country].classList.toggle("pointer-events-none");
    if (countries.value[country].classList.contains("correct")) {
      countries.value[country].classList.remove("correct");
    }
    if (countries.value[country].classList.contains("incorrect")) {
      countries.value[country].classList.remove("incorrect");
      correct = false;
    }
  });
  button.value.classList.toggle("hidden");
  if (correct) {
    emits("nextQuestion");
  } else {
    emits("incorrectAnswer");
  }
};
</script>

<template>
  <div class="w-[464px]">
    <h1 class="country-quiz">Country Quiz</h1>
    <div class="quiz-card">
      <img src="../assets/undraw_adventure_4hum 1.svg" alt="" class="svg-1" />
      <div v-if="props.currentQuestion.flag">
        <img :src="props.currentQuestion.flag" alt="" class="flag" />
      </div>
      <div class="question">
        {{ props.currentQuestion.question }}
      </div>
      <div
        class="options"
        @click="validateAnswer"
        :ref="
          (el) => {
            countries[option.option] = el;
          }
        "
        v-for="(option, index) in props.currentQuestion.options"
        :key="list[index]"
      >
        {{ list[index] }}
        <span class="text-lg pl-12">{{ option.option }}</span>
      </div>
      <div class="flex justify-end">
        <button
          class="font-bold text-lg text-white px-9 py-4 bg-[#F9A826] rounded-xl hidden"
          ref="button"
          @click="handleNext"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
