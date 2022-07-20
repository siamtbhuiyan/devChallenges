import axios from "axios";
const baseUrl = "https://quote-garden.herokuapp.com/api/v3/quotes";

const getRandom = async (): Promise<any> => {
  const response = await axios.get(`${baseUrl}/random`);
  return response.data.data[0];
};

const getQuotesFromAuthor = async (author: string): Promise<any> => {
  const response = await axios.get(`${baseUrl}?author=${author}&limit=3`);
  return response.data.data;
};

const quoteService = {
  getRandom,
  getQuotesFromAuthor,
};

export default quoteService;
