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
    changeQuestion() {
      let temp = {};
      this.questions.forEach((q, i) => {
        if (q === this.currentQuestion) {
          temp = this.questions[i + 1];
        }
      });
      this.currentQuestion = temp;
    },
    resetScore() {
      this.score = 0;
    },
  },
});
