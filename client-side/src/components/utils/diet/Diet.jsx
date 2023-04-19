import React, { useEffect } from 'react'
import fireIcon from '../../../icons/fireIcon.png';
import wheatIcon from '../../../icons/wheatIcon.png';
import waterIcon from '../../../icons/waterIcon.png';
import protienIcon from '../../../icons/protienIcon.png';
import MacrosLine from './MacrosLine';
import { useDietContext } from '../../../Contexts/SuggestedDietContextProvider';
import { useBmiContext } from '../../../Contexts/BmiDataContextProvider';



function Diet() {

    const { getSuggestedDiet, SuggestedDiet} = useDietContext();

    const id = localStorage.getItem('user_id')
    const bmi = localStorage.getItem('user_bmi')

    useEffect(() => {
        getSuggestedDiet('http://127.0.0.1:8000/api/fitness/dietSuggestor' , id, bmi);
    }, [bmi])

    return (
        SuggestedDiet ? (
            <div className='diet bg-slate-900 hover:bg-slate-800 duration-300 ease-in w-full h-[50%] flex justify-center' >
            <div className="diet-container flex flex-col justify-center w-full h-full">

                <MacrosLine
                    name='Burned calories' goal={`${SuggestedDiet.calories}KCAL`} img={fireIcon}
                    Sname='Carbs' Sgoal={`${SuggestedDiet.carbs} g`} Simg={wheatIcon}
                />


                <h2 className='text-3xl font-bold text-center text-white my-14'>{SuggestedDiet.name}</h2>

                <MacrosLine
                    name='Burned calories' goal={`${SuggestedDiet.fats}g`} img={waterIcon}
                    Sname='Carbs' Sgoal={`${SuggestedDiet.protein}g`} Simg={protienIcon}
                />

            </div>

        </div>
        ) : ''
        
    )
}

export default Diet