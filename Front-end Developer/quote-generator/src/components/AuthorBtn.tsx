import IQuote from "../types/quote";
const AuthorBtn = ({
  currentQuote,
  handleViewChange,
}: {
  currentQuote: IQuote;
  handleViewChange: () => void;
}) => {
  return (
    <div className="author-button" onClick={handleViewChange}>
      <div>
        <p className="font-bold text-2xl pb-2">{currentQuote.quoteAuthor}</p>
        <p className="text-sm font-medium text-gray-500">
          {currentQuote.quoteGenre}
        </p>
      </div>
      <div className="font-material text-2xl hidden-child">trending_flat</div>
    </div>
  );
};

export default AuthorBtn;
