<script setup>
import "./assets/background.png";
import QuizCard from "./components/QuizCard.vue";
import Footer from "./components/Footer.vue";
import quizService from "./services/quizes";
import { onBeforeMount } from "vue";
import { useQuizStore } from "./stores/quiz";
import { storeToRefs } from "pinia";

const quiz = useQuizStore();

const { questions, score } = storeToRefs(quiz);
const { increment, initializeQuiz } = quiz;
onBeforeMount(async () => {
  await initializeQuiz(quizService.getQuiz);
  let currentQuestion = questions.value[0];
});
const changeQuestion = () => {
  console.log("CHANGED");
};
</script>

<template>
  <div class="background">
    <div class="h-[calc(100vh-96px)] grid place-content-center">
      <QuizCard :currentQuestion="currentQuestion" />
    </div>
    <Footer />
  </div>
</template>
