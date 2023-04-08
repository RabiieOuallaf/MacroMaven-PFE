import React from 'react'

function Quote() {

  const quotes = [
    {quote: "If you didn't fight for what you want , don't cry for what you lose !"}
  ]

  return (
    <div className='bg-slate-900 w-full h-[30%] flex  flex-col '>
        <div className="quote-emoji">
          <h2 className='text-white text-3xl font-bold mx-5 my-5'>Today's quote 🔥</h2>
        </div>

        <div className='quote my-5 mx-10'>
          <h3 className='text-white text-md font-bold'>{quotes[0].quote}</h3>
        </div>
     </div>
  )
}

export default Quote