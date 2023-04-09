import React from 'react'

function Range(props) {
   
    return (
        <div className='range-calculator text-3xl text-white'>
            {/* == Range header == */}
            <div className="range-header flex items-center justify-between">
                {/* == range info == */}
                <div className="range-info flex gap-2 ">
                    <h3 className='text-2xl font-semibold'>{props.rangeType}</h3>
                    {/* == Range metric == */}
                    <div className="range-metric flex gap-3 text-sm">
                        <div className='cursor-pointer w-6 h-6  bg-blue-600 hover:bg-blue-700 duration-200 ease-in-out rounded-md text-center'>{props.primaryMetric}</div>
                        <div className='cursor-pointer w-6 h-6  bg-blue-600 hover:bg-blue-700 duration-200 ease-in-out rounded-md text-center'>{props.secondMetric}</div>
                    </div>

                </div>
                {/* Range value == */}
                <div className="range-value flex gap-1 text-sm border-b-[1px] ">
                    <h5 id={`range-value-${props.index}`}></h5>
                        <span className='text-blue-700'>{props.chosenMetric}</span>
                </div>

            </div>
            {/* == Range input == */}
            <div className="range-input">
                <input type="range" id={`range-${props.index}`} name={`${props.rangeType}-range`} min={props.minValue} max={props.maxValue} className='w-[135%]' onMouseMove={props.updateRangeValue}/>
            </div>


        </div>
    )
}

export default Range