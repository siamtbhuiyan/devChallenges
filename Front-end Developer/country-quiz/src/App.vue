<script setup>
import "./assets/background.png";
import QuizCard from "./components/QuizCard.vue";
import Footer from "./components/Footer.vue";
import GameOverCard from "./components/GameOverCard.vue";
import Spinner from "./components/Spinner.vue";
import OfflineCard from "./components/OfflineCard.vue";
import quizService from "./services/quizes";
import { onBeforeMount } from "vue";
import { useQuizStore } from "./stores/quiz";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const quiz = useQuizStore();

const { questions, score, currentQuestion } = storeToRefs(quiz);
const { increment, initializeQuiz, changeQuestion, resetScore } = quiz;
let loading = ref(true);
let gameOver = ref(false);
let online = ref(false);

const checkOnline = () => {
  online.value = navigator.onLine;
};

onBeforeMount(async () => {
  checkOnline();
  await initializeQuiz(quizService.getQuiz);
  loading.value = false;
});
const nextQuestion = () => {
  changeQuestion();
};
const incorrectAnswer = () => {
  gameOver.value = true;
};
const startNewGame = async () => {
  checkOnline();
  loading.value = true;
  resetScore();
  await initializeQuiz(quizService.getQuiz);
  gameOver.value = false;
  loading.value = false;
};
</script>

<template>
  <div class="background">
    <div class="app">
      <div v-if="!online" class="card">
        <OfflineCard />
      </div>
      <div v-else-if="loading">
        <Spinner />
      </div>
      <div v-else-if="gameOver" class="card">
        <GameOverCard :score="score" @startNewGame="startNewGame" />
      </div>
      <div v-else class="card">
        <QuizCard
          :currentQuestion="currentQuestion"
          @increaseScore="increment"
          @incorrectAnswer="incorrectAnswer"
          @nextQuestion="nextQuestion"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>
