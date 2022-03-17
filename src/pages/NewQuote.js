import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const [isAddQuote, setIsAddQuote] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAddQuote) {
      return;
    }
    navigate('/quotes')
  }, [isAddQuote])

  const addQuoteHandler = (quoteData) => {
      console.log(quoteData);
      setIsAddQuote(true);
  }
  

  return <QuoteForm onAddQuote={addQuoteHandler} />
};

export default NewQuote;