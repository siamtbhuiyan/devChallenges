import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questions: [],
    score: 0,
    currentQuestion: {},
  }),
  actions: {
    increment() {
      this.score++;
    },
    async initializeQuiz(quiz) {
      this.questions = await quiz();
      this.currentQuestion = this.questions[0];
    },
  },
});
