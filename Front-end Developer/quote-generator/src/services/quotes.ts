import axios from "axios";
const baseUrl = "https://quote-garden.herokuapp.com/api/v3";

const getRandom = async (): Promise<any> => {
  const response = await axios.get(`${baseUrl}/quotes/random`);
  console.log(response.data.data[0]);
  return response.data.data[0];
};

const quoteService = {
  getRandom,
};

export default quoteService;
