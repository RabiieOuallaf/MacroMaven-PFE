import React, { useEffect, useState } from 'react';
import moroccanHrira from '../../../icons/moroccanHrira.png'
import Recepie from './Recepie';
import { useNavigate } from 'react-router-dom';
function Nutrition() {

    const recepeis = [
        { name: 'moroccan Hrira', calories: '550-cal', img: moroccanHrira },
        { name: 'japanesse Ramen', calories: '590-cal', img: moroccanHrira }

    ]
    const Navigate = useNavigate();
    const navigateToSearchPage = () => {
        Navigate('/nutritionsearch');
    } 
    return (
        <div className='Nutrition bg-gray-300 hover:bg-gray-400 duration-300 cursor-pointer ease-in ml-[7%] w-[93%] h-[17%] ' onClick={navigateToSearchPage}>

            {
                recepeis.map((recepie) => (
                    <Recepie name={recepie.name} calories={recepie.calories} img={recepie.img} />
                ))
            }


        </div>
    )
}

export default Nutrition