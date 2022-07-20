import { useEffect } from "react";
import usePersistedState from "./hooks";
import quoteService from "./services/quotes";
import Quote from "./components/Quote";
import Author from "./components/Author";
import AuthorBtn from "./components/AuthorBtn";

const App = () => {
  const [currentQuote, setCurrentQuote] = usePersistedState("", "currentQuote");
  const [view, setView] = usePersistedState("quote", "view");
  useEffect(() => {
    const fetchRandomQuote = async () => {
      const randomQuote = await quoteService.getRandom();
      setCurrentQuote(randomQuote);
    };
    fetchRandomQuote();
  }, []);
  const fetchQuotesFromAuthor = async () => {
    const quotesFromAuthor = await quoteService.getQuotesFromAuthor(
      currentQuote.quoteAuthor
    );
    console.log(quotesFromAuthor);
  };
  if (view === "quote") {
    return (
      <div className="app">
        <div className="mx-auto">
          <Quote quote={currentQuote.quoteText} />
          <AuthorBtn currentQuote={currentQuote} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Author
          author={currentQuote.quoteAuthor}
          fetchQuotesFromAuthor={fetchQuotesFromAuthor}
        />
      </div>
    );
  }
};

export default App;
