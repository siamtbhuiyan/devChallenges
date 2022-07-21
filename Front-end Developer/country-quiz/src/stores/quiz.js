import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questions: [],
    score: 0,
  }),
  actions: {
    increment() {
      this.score++;
    },
    async initializeQuiz(quiz) {
      this.questions = await quiz();
    },
  },
});
