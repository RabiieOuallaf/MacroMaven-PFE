import React from 'react';
import Navbar from '../utils/main/Navbar';
import ananadi from '../../images/authentificationPages/ananadi.JPG'

function Profile() {
  return (  
    <div className='h-screen w-full bg-slate-950'>
      {/* == Navbar == */}
      <div className="py-5">
        <Navbar />
      </div>
      {/* == Profile container == */}
      <div className='flex flex-col justify-center items-center  '>
        {/* == First half(blue) == */}
        <div className="bg-blue-500 w-[75%] h-[240px] rounded-lg"> </div>
        {/* == profile-container == */}
        <div className="profile-container ">
          
          <div className="user-picture">
            <img src={ananadi} alt="user picture" className='w-36 h-36 rounded-full absolute left-[14%] top-[40%] border-8 border-white'/>
          </div>

          <div className="user-informations">
            <h2 className='text-3xl text-slate-950 absolute left-[26%] cursor-pointer'>Rabie Ouallaf</h2>
            <h4 className='absolute left-[27%] top-[56.5%] text-2xl cursor-pointer'> <span className='text-blue-500'> 18 </span>Years old</h4>
          </div>
          
          <div className="message-button">
            <button className='bg-slate-950 text-white w-32 rounded-xl p-1 absolute hover:bg-blue-500 duration-300 ease-in top-[70%] left-[15%]'>Message</button>
          </div>
        </div>
        {/* == second half(white) == */}
        <div className="bg-white w-[75%] h-[200px] rounded-lg"></div>
      </div>
    </div>
  )
}

export default Profile