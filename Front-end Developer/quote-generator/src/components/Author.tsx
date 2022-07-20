import IQuote from "../types/quote";
import Quote from "./Quote";
const Author = ({ author, quotes }: { author: string; quotes: IQuote[] }) => {
  return (
    <div>
      <h1 className="font-bold text-4xl py-28">{author}</h1>
      {quotes.map((quote) => {
        return <Quote quote={quote.quoteText} />;
      })}
    </div>
  );
};

export default Author;
