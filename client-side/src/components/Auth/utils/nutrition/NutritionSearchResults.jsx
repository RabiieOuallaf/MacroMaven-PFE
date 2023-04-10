import React from 'react';
import moroccanHrira from '../../../../icons/moroccanHrira.png'


function NutritionSearchResults(props) {
    return (
        <div className='text-white Recepie p-4 w-[73%] flex justify-around items-center ml-[2.9%] bg-slate-500 hover:bg-slate-400 duration-300 ease-in-out'>
           

            {/* == food calories == */}
            <div className="food-calories">
                <h2 className='text-2xl'>{props.calories}-KCAL  </h2>
            </div>

            {/* == food protien == */}
            <div className="food-calories">
                <h2 className='text-2xl text-center'>{props.protiens}G/<br />PROTIEN</h2>
            </div>

            {/* == food fat == */}
            <div className="food-calories">
                <h2 className='text-2xl text-center'>{props.fat}G/<br />FAT</h2>
            </div>
        </div>
    )
}

export default NutritionSearchResults