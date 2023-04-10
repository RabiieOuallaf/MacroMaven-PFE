import React from 'react'

function MacrosLine(props) {
    return (
        <div className="macros-first-container flex justify-around gap-32 pt-4">
            {/* == first macros line == */}
            <div className='first-macro flex items-center gap-2'>
                <div className="macro-icon">
                    <img src={props.img} alt="fire icon" className='w-6' />
                </div>

                <div className="macro-details text-white text-sm">
                    <h4 className='font-semibold text-md'>{props.macro}</h4>
                    <p>{props.goal}</p>
                </div>


            </div>

            {/* == second macros line == */}

            <div className='second-macro flex items-center gap-2'>
                <div className="macro-icon">
                    <img src={props.Simg} alt="fire icon" className='w-6' />
                </div>

                <div className="macro-details text-white text-sm">
                    <h4 className='font-semibold text-md'>{props.Smacro}</h4>
                    <p>{props.Sgoal}</p>
                </div>


            </div>




        </div>
    )
}

export default MacrosLine