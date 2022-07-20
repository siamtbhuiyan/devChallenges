const RandomBtn = ({ getRandomQuote }: { getRandomQuote: () => void }) => {
  return (
    <button className="my-4 mx-8 md:my-8 md:mx-28" onClick={getRandomQuote}>
      <span className="font-medium text-lg px-1">random</span>
      <span className="font-material text-base px-1">autorenew</span>
    </button>
  );
};

export default RandomBtn;
