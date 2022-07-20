import { useEffect } from "react";
import usePersistedState from "./hooks";
import quoteService from "./services/quotes";
import Quote from "./components/Quote";
const App = () => {
  const [currentQuote, setCurrentQuote] = usePersistedState("", "currentQuote");
  useEffect(() => {
    const fetchRandomQuote = async () => {
      const randomQuote = await quoteService.getRandom();
      setCurrentQuote(randomQuote);
    };
    fetchRandomQuote();
  }, []);
  return (
    <div className="app">
      <Quote quote={currentQuote.quoteText} />
    </div>
  );
};

export default App;
