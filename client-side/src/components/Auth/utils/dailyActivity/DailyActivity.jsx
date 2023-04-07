import React from 'react';
import ActivityDetails from './ActivityDetails';
import runningIcon from '../../../../icons/runningIcon.png';
import durationIcon from '../../../../icons/durationIcon.png';
function DailyActivity() {
  const activities = [
    { name: 'Running', goal: '14KM', img: runningIcon },
    { name: 'Duration', goal: '1h:13min', img: durationIcon }
  ]
  return (
    <div className='daily ml-[7%] bg-blue-500 w-[44%] h-[33%]'>
      {/* == activity name == */}
      <div className="activity-name">
        <h2 className='text-white text-3xl font-semibold ml-10 p-4'> <span>🌄</span> Morning walk</h2>
      </div>

      <div className='Acitivty-container flex justify-evenly items-center my-5'>
        {
          activities.map((activity) => (
            <ActivityDetails name={activity.name} goal={activity.goal} img={activity.img} />
          ))
        }
      </div>



    </div>
  )
}

export default DailyActivity