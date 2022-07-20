import { useEffect } from "react";
import usePersistedState from "./hooks";
import quoteService from "./services/quotes";
import Quote from "./components/Quote";
import Author from "./components/Author";
import AuthorBtn from "./components/AuthorBtn";
import RandomBtn from "./components/RandomBtn";
import Footer from "./components/Footer";

const App = () => {
  const [currentQuote, setCurrentQuote] = usePersistedState("", "currentQuote");
  const [view, setView] = usePersistedState("quote", "view");
  const [quotes, setQuotes] = usePersistedState([], "quotes");

  useEffect(() => {
    const getRandomQuote = async () => {
      const randomQuote = await quoteService.getRandom();
      setCurrentQuote(randomQuote);
      setView("quote");
    };
    getRandomQuote();
  }, []);
  const handleViewChange = async () => {
    const quotesFromAuthor = await quoteService.getQuotesFromAuthor(
      currentQuote.quoteAuthor
    );
    setQuotes(quotesFromAuthor);
    setView("author");
  };
  const getRandomQuote = async () => {
    const randomQuote = await quoteService.getRandom();
    setCurrentQuote(randomQuote);
    setView("quote");
  };
  if (view === "quote") {
    return (
      <div className="flex flex-col items-center">
        <div className="app">
          <div className="absolute top-0 right-0">
            <RandomBtn getRandomQuote={getRandomQuote} />
          </div>
          <div className="mx-auto">
            <Quote quote={currentQuote.quoteText} />
            <AuthorBtn
              currentQuote={currentQuote}
              handleViewChange={handleViewChange}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center">
        <div className="app">
          <div className="absolute top-0 right-0">
            <RandomBtn getRandomQuote={getRandomQuote} />
          </div>
          <Author author={currentQuote.quoteAuthor} quotes={quotes} />
        </div>
        <Footer />
      </div>
    );
  }
};

export default App;
