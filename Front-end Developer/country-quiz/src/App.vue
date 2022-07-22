<script setup>
import "./assets/background.png";
import QuizCard from "./components/QuizCard.vue";
import Footer from "./components/Footer.vue";
import quizService from "./services/quizes";
import { onBeforeMount } from "vue";
import { useQuizStore } from "./stores/quiz";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const quiz = useQuizStore();

const { questions, score, currentQuestion } = storeToRefs(quiz);
const { increment, initializeQuiz } = quiz;
let loading = ref(true);
onBeforeMount(async () => {
  await initializeQuiz(quizService.getQuiz);
  loading.value = false;
});
const changeQuestion = () => {
  console.log("CHANGED");
};
</script>

<template>
  <div class="background">
    <div class="app">
      <div v-if="loading"></div>
      <div v-else>
        <QuizCard
          :currentQuestion="currentQuestion"
          @increaseScore="increment"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>
