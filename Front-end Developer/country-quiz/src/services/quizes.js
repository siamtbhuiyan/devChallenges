import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1/all";

const getQuiz = async () => {
  const response = await axios.get(baseUrl);
  const data = response.data.map((r) => {
    return {
      capital: r.capital ? r.capital[0] : null,
      name: r.name["common"] ? r.name["common"] : null,
      flag: r.flags["svg"] ? r.flags["svg"] : null,
    };
  });
  const tempCountries = data.map((c) => {
    if (c.capital && c.name.length < 30) {
      return c;
    }
  });
  const countries = tempCountries.filter((c) => {
    return c !== undefined;
  });

  const capitalQuiz = countries.map((country, index) => {
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
        option: countries[r].name,
        correct: correctAnswer === countries[r].name,
      };
    });
    const getRandomQuestion = `${country.capital} is the capital of`;
    return {
      question: getRandomQuestion,
      options: randomOptions,
      flag: null,
    };
  });
  const flagQuiz = countries.map((country, index) => {
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
        option: countries[r].name,
        correct: correctAnswer === countries[r].name,
      };
    });
    const flag = country.flag;
    const getRandomQuestion = "Which country does this flag belong to?";
    return {
      question: getRandomQuestion,
      options: randomOptions,
      flag,
    };
  });
  const quiz = capitalQuiz.concat(flagQuiz);
  const randomQuiz = quiz.sort(() => 0.5 - Math.random());
  return randomQuiz;
};

const quizService = { getQuiz };

export default quizService;
