import { useEffect } from "react";
import usePersistedState from "./hooks";
import quoteService from "./services/quotes";
import Quote from "./components/Quote";
import Author from "./components/Author";
import AuthorBtn from "./components/AuthorBtn";

const App = () => {
  const [currentQuote, setCurrentQuote] = usePersistedState("", "currentQuote");
  const [view, setView] = usePersistedState("quote", "view");
  const [quotes, setQuotes] = usePersistedState([], "quotes");

  useEffect(() => {
    setView("quote");
    // const fetchRandomQuote = async () => {
    //   const randomQuote = await quoteService.getRandom();
    //   console.log(randomQuote);
    //   setCurrentQuote(randomQuote);
    // };
    // fetchRandomQuote();
  }, []);
  const handleViewChange = async () => {
    const quotesFromAuthor = await quoteService.getQuotesFromAuthor(
      currentQuote.quoteAuthor
    );
    setQuotes(quotesFromAuthor);
    setView("author");
    console.log(quotes);
  };
  if (view === "quote") {
    return (
      <div className="app">
        <div className="mx-auto">
          <Quote quote={currentQuote.quoteText} />
          <AuthorBtn
            currentQuote={currentQuote}
            handleViewChange={handleViewChange}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Author author={currentQuote.quoteAuthor} quotes={quotes} />
      </div>
    );
  }
};

export default App;
