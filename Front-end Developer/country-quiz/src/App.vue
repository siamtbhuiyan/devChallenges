<script setup>
import "./assets/background.png";
import QuizCard from "./components/QuizCard.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="background">
    <div class="h-[calc(100vh-96px)] grid place-content-center">
      <QuizCard />
    </div>
    <Footer />
  </div>
</template>
