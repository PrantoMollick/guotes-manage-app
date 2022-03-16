import QuoteList from "../components/quotes/QuoteList";


const DUMMY_QUOTES = [
{ id: 'q1', author: 'Pranto', text: 'Learn React router with fun'}, 
{ id: 'q2', author: 'Mollick', text: 'React is great ui librery'}, 

];


const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;