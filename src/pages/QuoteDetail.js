import { Fragment } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Pranto', text: 'Learn React router with fun' },
  { id: 'q2', author: 'Mollick', text: 'React is great ui librery' },
];

const QuoteDetail = () => {
  const params = useParams();
  const location = useLocation();
  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote);
  console.log(location);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  const loadComments = (
    <div className='centered'>
      <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
        Load Comments
      </Link>
    </div>
  );
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {location.pathname === `/quotes/${params.quoteId}` && loadComments}
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
