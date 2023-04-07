import React from 'react';

function ActivityDetails(props) {
    return (
        <div>
            {/* == activity description == */}
            <div className="activity-description-container flex justify-center items-center gap-20">
                {/* == activity type == */}
                <div className="activity-type flex gap-4">

                    <div className="activity-circle flex items-center justify-center border border-white w-16 h-16 rounded-full text-center">
                        {/* == activity icon == */}
                        <div className="acitivty-image">
                            <img src={props.img} alt="Running icon" className='w-6' />
                        </div>

                    </div>
                    {/* == activity details == */}
                    <div className="activity-details flex flex-col justify-center text-center">
                        <h3 className='activity-name text-white font-semibold'> {props.name} </h3>
                        <h4 className='acitvity-goal text-white font-bold'> {props.goal} </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityDetails