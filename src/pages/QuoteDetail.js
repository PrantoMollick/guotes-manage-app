import { Fragment } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Pranto', text: 'Learn React router with fun'}, 
  { id: 'q2', author: 'Mollick', text: 'React is great ui librery'}, 
  
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author}/>

      <Outlet />

    </Fragment>
  );
};

export default QuoteDetail;
