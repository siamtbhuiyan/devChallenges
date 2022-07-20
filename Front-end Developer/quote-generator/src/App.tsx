import { useEffect } from "react";
import usePersistedState from "./hooks";
import quoteService from "./services/quotes";
const App = () => {
  const [currentQuote, setCurrentQuote] = usePersistedState("", "currentQuote");
  useEffect(() => {
    const fetchRandomQuote = async () => {
      const randomQuote = await quoteService.getRandom();
      setCurrentQuote(randomQuote);
    };
    fetchRandomQuote();
  }, []);
  console.log(currentQuote);
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl">{currentQuote.data[0].quoteText}</h1>
      <p>{currentQuote.data[0].quoteAuthor}</p>
      <p>{currentQuote.data[0].quoteGenre}</p>
    </div>
  );
};

export default App;
