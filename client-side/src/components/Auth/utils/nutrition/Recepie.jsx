import React from 'react'

function Recepie(props) {
    
    return (
        <div>
            <div className='Recepie h-[50%] flex justify-between items-center'>
                <div className="recepie-informations flex gap-2 items-center mx-8 my-1">
                    {/* == Recepie Image == */}
                    <img src={props.img} alt="recepie image" className='w-10' />
                    {/* == Recepie name == */}
                    <h3 className='font-semibold text-lg font-semibold text-center '>{props.name}</h3>
                </div>
                <div className="recepie-calories mx-8">
                    {/* == Meal's calories == */}
                    <h3 className='text-center text-xl'>{props.calories}</h3>
                </div>


            </div>
        </div>
    )
}

export default Recepie