const Author = ({
  author,
  fetchQuotesFromAuthor,
}: {
  author: string;
  fetchQuotesFromAuthor: () => void;
}) => {
  return <div>{author}</div>;
};

export default Author;
