import React from 'react'
import Sidebar from '../utils/main/Sidebar'

function NutritionSearchEngine() {
  return (
    <div className='h-screen w-full bg-slate-950'>
      <Sidebar />   

      <div className="search-header flex justify-center">
        <h2 className='text-white text-5xl font-semibold my-8'>Your diet is <br/><span className='text-blue-500 flex justify-center text-6xl'>Keto</span></h2>
      </div>  

      <div className="search-input flex justify-center">
      <input type="text" className='w-[70%] h-[32px] rounded-lg bg-inherit border border-2 border-white' />

      </div>
    </div>
  )
}

export default NutritionSearchEngine