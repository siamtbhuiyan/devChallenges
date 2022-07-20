import axios from "axios";
const baseUrl = "https://quote-garden.herokuapp.com/api/v3";

const getRandom = async (): Promise<any> => {
  const response = await axios.get(`${baseUrl}/quotes/random`);
  return response.data;
};

const quoteService = {
  getRandom,
};

export default quoteService;
