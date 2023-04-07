import React from 'react'
import fireIcon from '../../../../icons/fireIcon.png';
import wheatIcon from '../../../../icons/wheatIcon.png';
import waterIcon from '../../../../icons/waterIcon.png';
import protienIcon from '../../../../icons/protienIcon.png';
import MacrosLine from './MacrosLine';



function diet() {
    
    return (
        <div className='diet ml-[7%] bg-slate-900 w-[44%] h-[50%] flex justify-center'>
            <div className="diet-container flex flex-col justify-center w-full h-full">

            <MacrosLine 
                name='Burned calories' goal='200/500cal' img={fireIcon} 
                Sname='Carbs' Sgoal='14/40g' Simg={wheatIcon}
            />

            <h2 className='text-3xl font-bold text-center text-white my-14'>Keto diet</h2>
            
            <MacrosLine 
                name='Burned calories' goal='200/500cal' img={waterIcon} 
                Sname='Carbs' Sgoal='14/40g' Simg={protienIcon}
            />
            </div>
            
        </div>
    )
}

export default diet