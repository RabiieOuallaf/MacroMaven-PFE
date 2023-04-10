import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Quote() {
  const [quotes , setQuotes] = useState('');

  useEffect( () => {
    
    axios.get('https://type.fit/api/quotes')
        .then(response => {
          const maxNumber = response.data.length - 1; // Get the length of data minus one to loop over it 
          const randomNumber = Math.ceil((Math.random() * maxNumber) + 1); // returns a single text value, +1 to avoid 0 

          setQuotes(response.data[randomNumber].text);

        })
        .catch(error => {
          console.log(error);
        })
  }, [])

  // const quotes = [
  //   {quote: "If you didn't fight for what you want , don't cry for what you lose !"}
  // ]

  return (
    <div className='bg-slate-900 w-full h-[30%] flex  flex-col '>
        <div className="quote-emoji">
          <h2 className='text-white text-3xl font-bold mx-5 my-5'>Today's quote 🔥</h2>
        </div>

        <div className='quote my-5 mx-10'>
          <h3 className='text-white text-md font-bold'>{quotes }</h3>
        </div>
     </div>
  )
}

export default Quote