import React from 'react'

function Range() {
    const updateHeightValue = () => {
        const currentHeightValue = document.getElementById('height-range').value;
        const heightValurProvider = document.getElementById('height-value');
        heightValurProvider.textContent = currentHeightValue;
    }
    return (
        <div className='range-calculator text-3xl text-white'>
            {/* == Range header == */}
            <div className="range-header flex items-center justify-between">
                {/* == range info == */}
                <div className="range-info flex gap-2 ">
                    <h3 className='text-2xl font-semibold'>Height</h3>
                    {/* == Range metric == */}
                    <div className="range-metric flex gap-3 text-sm">
                        <div className='cursor-pointer w-6 h-6  bg-blue-600 hover:bg-blue-700 duration-200 ease-in-out rounded-md text-center'>cm</div>
                        <div className='cursor-pointer w-6 h-6  bg-blue-600 hover:bg-blue-700 duration-200 ease-in-out rounded-md text-center'>ft</div>
                    </div>

                </div>
                {/* Range value == */}
                <div className="range-value flex gap-1 text-sm border-b-[1px] ">
                    <h5 id='height-value'></h5>
                        <span className='text-blue-700'>cm</span>
                </div>

            </div>
            {/* == Range input == */}
            <div className="range-input">
                <input type="range" id="height-range" name='height-range' min='0' max='205' className='w-[135%]' onMouseMove={updateHeightValue}/>
            </div>


        </div>
    )
}

export default Range