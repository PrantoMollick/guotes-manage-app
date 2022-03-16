import { Fragment } from 'react';
import { Outlet, useParams } from 'react-router-dom';


const QuoteDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
