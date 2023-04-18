import React, { useEffect, useState } from 'react'
import sideHero from '../../images/fitness/sideHero.png';
import bmiResultBg from '../../images/fitness/bmiResultBg.png';
import male from '../../icons/male.png';
import female from '../../icons/female.png';
import Range from '../utils/fitness/Range';
import axios from 'axios';
import { useStateContext } from '../../Contexts/BmiDataContextProvider';
import { useDietContext } from '../../Contexts/SuggestedDietContextProvider';
import { Link } from 'react-router-dom';


function BmiCalculator() {
    const [gender, setGender] = useState('male');
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();


    const { bmiData, getUserBmiData } = useStateContext();
    const user_id = localStorage.getItem('user_id');


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
        if (index == 0) {
            setHeight(currentValue);
        }
        if (index == 1) {
            setWeight(currentValue);
        }
        ValurProvider.textContent = currentValue;
    }

    const changeDefaultGender = () => {
        gender == 'male' ? setGender('female') : setGender('male');
    }

    const getUserBmi = (e) => {
        e.preventDefault();
        console.log(bmiData ? bmiData : '');
        getUserBmiData(height, weight, gender, user_id);


    }



    return (

        <div className='h-screen w-full bg-slate-900 overflow-hidden'>
            {/* == Image container == */}
            <div className="side-hero-img ">

                <img src={sideHero} alt="bodybuilder lifting weights" className='h-screen absolute right-0 z-30' />
                <div className="bmi-results ">
                    <img src={bmiResultBg} alt="bmi result blue-to-white background" className='w-[80%] h-[25%] absolute bottom-0' />
                    {
                        bmiData && bmiData.bmi && bmiData.comment && bmiData.status ? <div className='absolute bottom-0 m-9 cursor-pointer'>
                            <div className="bmi-container flex justify-between w-[850px]">

                                <div className="bmi-data">
                                    <h2 className='text-white text-[2.9rem] font-bold'>Your BMI is : {parseInt(bmiData.bmi)}</h2>
                                    <h3 className='text-white text-2xl font-bold'>{bmiData.status} , {bmiData.comment}</h3>
                                </div>
                                

                                <button className={`
                                w-20    
                                h-8        
                                absolute 
                                right-0
                                top-10        
                                text-sm
                                rounded-md 
                                cursor-pointer 
                                text-white 
                                bg-${gender == 'male' ? 'blue-600' : 'pink-400'}
                                hover:bg-${gender == 'male' ? 'blue-600' : 'pink-500'}
                                duration-200 ease-in-out`

                                }
                                >
                                    <Link to={'/home'}>your diet</Link>
                                </button>
                            </div>


                        </div> : ''
                    }
                </div>


            </div>

            <div className="bmi-calculator-container flex flex-col gap-10 w-[50%] mx-10 items-center">

                <div className="gender w-[60%] my-10 flex justify-between">
                    {/* Male button*/}
                    <div className="male-button" onClick={changeDefaultGender}>
                        <button className='w-36 p-4 text-white rounded-md bg-blue-600 hover:bg-blue-700 duration-200 ease-in flex items-center justify-evenly'>
                            <img src={male} alt='male icon' className='w-6' /> <span className='text-2xl text-center font-semibold'>Male</span>
                        </button>
                    </div>
                    {/* femalte button*/}
                    <div className="female-button" onClick={changeDefaultGender}>
                        <button className='w-36 p-4 text-white rounded-md bg-pink-400 hover:bg-pink-500 duration-200 ease-in flex items-center justify-evenly'>
                            <img src={female} alt='male icon' className='w-6' /> <span className='text-2xl text-center font-semibold'>Female</span>
                        </button>
                    </div>



                </div>

                <div className="height-weight-range w-[90%] flex flex-col gap-12">
                    {rangeData.map((range, index) => (
                        <Range
                            index={index}
                            rangeType={range.rangeType}
                            primaryMetric={range.primaryMetric}
                            secondMetric={range.secondMetric}
                            chosenMetric={range.chosenMetric}
                            maxValue={range.maxValue}
                            updateRangeValue={() => updateRangeValue(index)}
                            gender={gender}

                        />
                    ))}
                </div>

                <div className="calculate-bmi-button absolute end-1/3 bottom-40">
                    <button
                        className={`w-32 p-2 rounded-md cursor-pointer text-white bg-${gender == 'male' ? 'blue-600' : 'pink-400'} hover:bg-${gender == 'male' ? 'blue-600' : 'pink-500'} duration-200 ease-in-out`}
                        onClick={getUserBmi}
                    >
                        Calculate bmi

                    </button>
                </div>
            </div>
        </div>


    )
}

export default BmiCalculator