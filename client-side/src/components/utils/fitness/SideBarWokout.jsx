import axios from 'axios';
import React, { useState } from 'react';
import Exercices from '../../Fitness/Exercices';
import WorkoutPage from '../../Fitness/WorkoutPage';


function SideBarWokout() {

    const exerciesCategory = [
        {category: 'chest', id: 1},
        {category: 'Shoulders', id: 2},
        {category: 'Legs', id: 3},
        {category: 'Abs', id: 4},
        {category: 'Back', id: 5},

    ]

    const [exercices, setExercices] = useState();


    const handleExerciceFetching = (category) => {
        switch(category){
            case 'chest': 
                axios.get('http://127.0.0.1:8000/api/fitness/getexercicebycategory', {params:{category_name:'chest'}})
                .then( (response) => {
                    setExercices(response.data.exercices);
                })
                .catch( (erorr) => {
                    console.log(erorr);
                })
        }


    }

  return (
    <div className='bg-slate-800 w-[15%] flex flex-col gap-5 h-screen items-center justify-center absolute left-20'>
        
        <div className="exercise-category flex flex-col gap-10">
            {
                exerciesCategory.map( (exerciesCategory) => (
                    <h3 
                        className='text-white hover:text-blue-500 duration-200 font-semibold text-[24px] cursor-pointer'
                        onClick={ () => handleExerciceFetching(exerciesCategory.category)}
                        >{exerciesCategory.category}</h3>
                ))
            }
        </div>
        <div className="">
            
            <Exercices 
                exercices={exercices}
            />

        </div>
        
    </div>
  )
}

export default SideBarWokout