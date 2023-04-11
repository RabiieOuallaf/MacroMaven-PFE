import React from 'react';
import Navbar from '../utils/main/Navbar';
import Sidechat from '../utils/users/Sidechat';
import ChatBar from '../utils/users/ChatBar';

function Chat() {
  return (
    <div className='bg-slate-900 h-screen overflow-hidden'>
        <div className="navbar-container py-6">
            <Navbar />
        </div>

        <div className="sidechat-container">
            <Sidechat />  
        </div>

        <div className="chatbar-container">
            <ChatBar />
        </div>


    </div>
  )
}

export default Chat