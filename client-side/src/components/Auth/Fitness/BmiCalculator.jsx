import React from 'react'
import sideHero from '../../../images/fitness/sideHero.png';
import bmiResultBg from '../../../images/fitness/bmiResultBg.png';
import male from '../../../icons/male.png';
import female from '../../../icons/female.png';
import Range from '../utils/fitness/Range';


function BmiCalculator() {
    return (
        <div className='h-screen w-full bg-slate-900'>
            {/* == Image container == */}
            <div className="side-hero-img ">
                <img src={sideHero} alt="bodybuilder lifting weights" className='h-screen absolute right-0 z-30' />
                <img src={bmiResultBg} alt="bmi result blue-to-white background" className='w-[80%] h-[25%] absolute bottom-0' />
            </div>

            <div className="bmi-calculator-container flex flex-col gap-10 w-[50%] items-center">

                <div className="gender w-[60%] my-10 flex justify-between">
                    {/* Male button*/}
                    <div className="male-button">
                        <button className='w-36 p-4 text-white rounded-md bg-blue-600 hover:bg-blue-700 duration-200 ease-in flex items-center justify-evenly'>
                            <img src={male} alt='male icon' className='w-6'/> <span className='text-2xl text-center font-semibold'>Male</span>
                        </button>
                    </div>
                    {/* femalte button*/}
                    <div className="female-button">

                    <button className='w-36 p-4 text-white rounded-md bg-pink-400 hover:bg-pink-500 duration-200 ease-in flex items-center justify-evenly'>
                            <img src={female} alt='male icon' className='w-6'/> <span className='text-2xl text-center font-semibold'>Female</span>
                        </button>
                    </div>


                </div>

                <div className="height-weight-range w-[80%]">
                    <Range />
                </div>
            </div>
        </div>
    )
}

export default BmiCalculator