import IQuote from "../types/quote";
import Quote from "./Quote";
const Author = ({ author, quotes }: { author: string; quotes: IQuote[] }) => {
  return (
    <div>
      <h1 className="font-bold text-4xl py-28 mx-10">{author}</h1>
      {quotes.map((quote, index) => {
        return <Quote quote={quote.quoteText} key={index} />;
      })}
    </div>
  );
};

export default Author;
