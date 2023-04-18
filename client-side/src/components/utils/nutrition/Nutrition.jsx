import React, { useEffect, useState } from 'react';
import moroccanHrira from '../../../icons/moroccanHrira.png'
import Recepie from './Recepie';
import axios from 'axios';

function Nutrition() {

    const recepeis = [
        { name: 'moroccan Hrira', calories: '550-cal', img: moroccanHrira },
        { name: 'japanesse Ramen', calories: '590-cal', img: moroccanHrira }

    ]
    return (
        <div className='Nutrition bg-gray-300 ml-[7%] w-[93%] h-[17%]  '>

            {
                recepeis.map((recepie) => (
                    <Recepie name={recepie.name} calories={recepie.calories} img={recepie.img} />
                ))
            }


        </div>
    )
}

export default Nutrition