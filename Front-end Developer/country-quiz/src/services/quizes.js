import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1/all";

const getQuiz = async () => {
  const response = await axios.get(baseUrl);
  const countries = response.data.map((r) => {
    return {
      capital: r.capital ? r.capital[0] : null,
      name: r.name["common"] ? r.name["common"] : null,
      flag: r.flags["svg"] ? r.flags["svg"] : null,
    };
  });

  const capitalQuiz = countries.map((country, index) => {
    if (country.capital) {
      const randomOrderSet = new Set();
      randomOrderSet.add(index);
      while (randomOrderSet.size !== 4) {
        randomOrderSet.add(
          Math.floor(Math.random() * (countries.length - 1)) + 0
        );
      }
      const correctAnswer = country.name;
      const randomOrderArray = Array.from(randomOrderSet);
      const randomOrder = randomOrderArray.sort(() => 0.5 - Math.random());
      const randomOptions = randomOrder.map((r) => {
        return {
          option: {
            option: countries[r].name,
            correct: correctAnswer === countries[r].name,
          },
        };
      });
      const getRandomQuestion = `${country.capital} is the capital of`;
      return {
        getRandomQuestion,
        randomOptions,
      };
    }
  });
  const flagQuiz = countries.map((country, index) => {
    if (country.capital) {
      const randomOrderSet = new Set();
      randomOrderSet.add(index);
      while (randomOrderSet.size !== 4) {
        randomOrderSet.add(
          Math.floor(Math.random() * (countries.length - 1)) + 0
        );
      }
      const correctAnswer = country.name;
      const randomOrderArray = Array.from(randomOrderSet);
      const randomOrder = randomOrderArray.sort(() => 0.5 - Math.random());
      const randomOptions = randomOrder.map((r) => {
        return {
          option: {
            option: countries[r].name,
            correct: correctAnswer === countries[r].name,
          },
        };
      });
      const flag = country.flag;
      const getRandomQuestion = "Which country does this flag belong to?";
      return {
        getRandomQuestion,
        randomOptions,
        flag,
      };
    }
  });
  const quiz = capitalQuiz.concat(flagQuiz);
  const randomQuiz = quiz.sort(() => 0.5 - Math.random());
  return randomQuiz;
};

const quizService = { getQuiz };

export default quizService;
