import React, { useEffect, useState } from 'react';
import ActivityDetails from './ActivityDetails';
import runningIcon from '../../../icons/runningIcon.png';
import durationIcon from '../../../icons/durationIcon.png';
function DailyActivity() {
  const [activityName , setActivityName] = useState('');
  const [activitySecondName , setActivitySecondName] = useState('');

  const [activityGoal, setActivityGoal] = useState('');

  const [activitySecondGoal, setActivitySecondGoal] = useState('');
  const [activityImage, setActivityImage] = useState('');
  const [activitySecondImage, setActivitySecondImage] = useState('');

  const [themeColor, setThemeColor] = useState('blue-500');
  


  const [headlineName, setHeadlineName] = useState('');
  const [headlineIcon, setHeadlineIcon] = useState('');
  const [click , setClick] = useState(0);
  useEffect( () => {
    const time = new Date();
    const currentTime = time.getHours();
    const randomNumber = Math.round(Math.random() * 3);

    setThemeColor(themes[randomNumber]);

    // Set the headline based on the current time 
    if (currentTime >= 6 && currentTime < 12) {
      setHeadlineName('Morning');
      setHeadlineIcon('🌄');
    } else if (currentTime >= 12 && currentTime < 18) {
      setHeadlineName('Afternoon');
      setHeadlineIcon('😴');
    } else if (currentTime >= 18 && currentTime < 24) {
      setHeadlineName('Evening');
      setHeadlineIcon('🪷🌄');
    } else {
      setHeadlineName('Night');
      setHeadlineIcon('🌆');
    }

    // Set the activity randomly

    setActivityName(activities[randomNumber][0].name);
    setActivityGoal(activities[randomNumber][0].goal);
    setActivityImage(activities[randomNumber][0].img);

    setActivitySecondName(activities[randomNumber][1].name);
    setActivitySecondGoal(activities[randomNumber][1].goal);
    setActivitySecondImage(activities[randomNumber][1].img);




  }, [click])

  const activities= [
    [
      { name: 'Running', goal: '14KM', img: runningIcon},
      { name: 'Duration', goal: '1h:13min', img: durationIcon }
    ],
    [
      { name: 'Nap', goal: 'rest', img: runningIcon},
      { name: 'Duration', goal: '13min', img: durationIcon }
    ],
    [
      {name: 'Yoga', goal: 'relax', img: runningIcon},
      { name: 'Duration', goal: '45min', img: durationIcon }
    ],
    [
      { name: 'Fast walk', goal: '10KM', img: runningIcon},
      {name: 'Duration', goal: '1h:15min', img: durationIcon }
    ]
    
  ]

  const themes = [
    'bg-blue-500',
    'bg-[#ff5555]',
    'bg-[#9b55ff]',
    'bg-[#938a9f]'
  ]





  return (
    <div className={`daily-activity ${themeColor} w-[103%] h-[33%] shadow-sm shadow-blue-500 z-40 cursor-pointer`} onClick={() => setClick( click + 1 )}>
      {/* == activity name == */}
      <div className="activity-name">
        <h2 className='text-white text-3xl font-semibold ml-10 p-4'> <span>{headlineIcon}</span> {headlineName}</h2>
      </div>

      <div className='Acitivty-container flex justify-evenly items-center my-5'>
        
        <ActivityDetails name={activityName} goal={activityGoal} img={activityImage} />
        <ActivityDetails name={activitySecondName} goal={activitySecondGoal} img={activitySecondImage} />

        
      </div>



    </div>
  )
}

export default DailyActivity