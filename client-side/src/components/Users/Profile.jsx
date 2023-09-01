import React, { useEffect, useState } from 'react';
import Navbar from '../utils/main/Navbar';
import ananadi from '../../images/authentificationPages/ananadi.JPG';
import settings from '../../icons/settings.png';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';



function Profile() {

  const [userData, setUserData] = useState('');
  const user_id = localStorage.getItem('user_id');
  const navigate = useNavigate()
  const navigateToUpdatePage = () => {
    navigate('/profile/update')
  }
  
  useEffect(() => {
     axios.post('http://127.0.0.1:8000/api/auth/getuser', {user_id})
     .then( (response) => {
        setUserData(response.data.userData);
     })
     .catch( (error) =>  {
      console.log(error)
     })
  },[])

  return (  
    <div className='h-screen w-full bg-slate-950'>
      {/* == Navbar == */}
      <div className="py-5">
        <Navbar />
      </div>
      {/* == Profile container == */}
      <div className='flex flex-col justify-center items-center  '>
        {/* == First half(blue) == */}
        <div className="bg-blue-500 w-[85%] h-[240px] rounded-lg"> </div>
        {/* == profile-container == */}
        <div className="profile-container ">
          
          <div className="user-picture">
            <img src={userData.picture} alt="user picture" className='w-36 h-36 rounded-full absolute left-[10%] top-[40%] border-8 border-white'/>
          </div>

          <div className="user-informations">
            <h2 className='text-3xl text-slate-950 absolute left-[22%] cursor-pointer'>{userData.name}</h2>
            <h4 className='absolute left-[23%] top-[56.5%] text-2xl cursor-pointer'> <span className='text-blue-500'> {userData.age} </span>Years old</h4>
          </div>


          
        </div>
        {/* == second half(white) == */}
        <div className="bg-white w-[85%] h-[200px] rounded-lg pt-2" onClick={navigateToUpdatePage}>
          <img src={settings} alt="" className='w-6 absolute right-[14%] cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Profile