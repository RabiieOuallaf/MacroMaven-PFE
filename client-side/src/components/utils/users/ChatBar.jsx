import React from 'react';
import ananadi from '../../../images/authentificationPages/ananadi.JPG';

function ChatBar() {
    const userData = [
        {sender: 'Rabie Ouallaf' , Senderimg : ananadi}
    ]
  return (
    <div className='bg-slate-950 h-[12%] w-[92%] p-2 absolute left-[8%] flex items-center'>
        <img src={userData[0].Senderimg} alt="sender profile image" className='w-12 h-12 border-2 rounded-[100%] mx-6 cursor-pointer'/>
        <h4 className='text-white font-semibold'>Welcome back ! ,<span className='text-blue-500 cursor-pointer hover:text-white duration-200 ease-out'>{userData[0].sender}</span></h4>
    </div>
  )
}

export default ChatBar