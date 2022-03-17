import { Fragment, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';


const QuoteDetail = () => {
  const params = useParams();
  const location = useLocation();
  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);
  
  // console.log(loadedQuote);
  // console.log(location);
  // console.log(params);


  const { quoteId } = params; 
  
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  }

  if (error) {
    return <p className='center'>{error}</p>
  }

  if (!loadedQuote.text) {
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
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {location.pathname === `/quotes/${params.quoteId}` && loadComments}
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
