import React from 'react'
import sideHero from '../../../images/fitness/sideHero.png';
import bmiResultBg from '../../../images/fitness/bmiResultBg.png';
import male from '../../../icons/male.png';
import female from '../../../icons/female.png';
import Range from '../utils/fitness/Range';


function BmiCalculator() {
    const rangeData = [
        {
            rangeType: 'Height',
            primaryMetric: 'cm',
            secondMetric: 'ft',
            chosenMetric: 'cm',
            maxValue: '205',
            minValue: '115'
        },
        {
            rangeType: 'Weight',
            primaryMetric: 'kg',
            secondMetric: 'lbs',
            chosenMetric: 'kg',
            maxValue: '200',
            minValue: '25'
        }
        
    ];
    const updateRangeValue = (index) => {
        const currentValue = document.getElementById(`range-${index}`).value;
        const ValurProvider = document.getElementById(`range-value-${index}`);
        console.log(currentValue)
        ValurProvider.textContent = currentValue;
    }
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
                            <img src={male} alt='male icon' className='w-6' /> <span className='text-2xl text-center font-semibold'>Male</span>
                        </button>
                    </div>
                    {/* femalte button*/}
                    <div className="female-button">
                        <button className='w-36 p-4 text-white rounded-md bg-pink-400 hover:bg-pink-500 duration-200 ease-in flex items-center justify-evenly'>
                            <img src={female} alt='male icon' className='w-6' /> <span className='text-2xl text-center font-semibold'>Female</span>
                        </button>
                    </div>


                </div>

                <div className="height-weight-range w-[80%] flex flex-col gap-12">
                    {rangeData.map((range,index) => (
                        <Range
                            index={index}
                            rangeType={range.rangeType}
                            primaryMetric={range.primaryMetric}
                            secondMetric={range.secondMetric}
                            chosenMetric={range.chosenMetric}
                            maxValue={range.maxValue}
                            updateRangeValue={() => updateRangeValue(index)}
                        />
                    ))}
                </div>

                <div className="calculate-bmi-button">
                    <button className='w-32 p-2 rounded-md cursor-pointer text-white bg-blue-600 hover:bg-blue-700 duration-200 ease-in-out '>Calculate bmi</button>
                </div>
            </div>
        </div>
    )
}

export default BmiCalculator