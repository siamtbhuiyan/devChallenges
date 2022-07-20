import { useEffect } from "react";
import usePersistedState from "./hooks";
import quoteService from "./services/quotes";
import Quote from "./components/Quote";
import Author from "./components/Author";
const App = () => {
  const [currentQuote, setCurrentQuote] = usePersistedState("", "currentQuote");
  const [view, setView] = usePersistedState("quote", "view");
  useEffect(() => {
    const fetchRandomQuote = async () => {
      const randomQuote = await quoteService.getRandom();
      setCurrentQuote(randomQuote);
    };
    const fetchQuotesFromAuthor = async () => {
      const quotesFromAuthor = await quoteService.getQuotesFromAuthor(
        currentQuote.quoteAuthor
      );
      console.log(quotesFromAuthor);
    };
    fetchRandomQuote();
  }, []);
  if (view === "quote") {
    return (
      <div className="app">
        <Quote quote={currentQuote.quoteText} />
      </div>
    );
  } else {
    return (
      <div className="app">
        <Author author={currentQuote.quoteAuthor} />
      </div>
    );
  }
};

export default App;
