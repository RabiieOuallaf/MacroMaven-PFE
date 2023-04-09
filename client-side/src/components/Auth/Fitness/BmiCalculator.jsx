import React from 'react'
import sideHero from '../../../images/fitness/sideHero.png';
import bmiResultBg from '../../../images/fitness/bmiResultBg.png';

function BmiCalculator() {
  return (
    <div className='h-screen w-full bg-slate-900'>
        {/* == Image container == */}
        <div className="side-hero-img ">
            <img src={sideHero} alt="bodybuilder lifting weights" className='h-screen absolute right-0 z-30'/>
            <img src={bmiResultBg} alt="bmi result blue-to-white background" className='w-[80%] h-[25%] absolute bottom-0' />
        </div>
    </div>
  )
}

export default BmiCalculator