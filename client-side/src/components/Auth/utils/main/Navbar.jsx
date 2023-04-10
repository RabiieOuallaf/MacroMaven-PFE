import React from 'react'
import macroMavenLogo from '../../../../icons/MacroMavenLogo.png';
import doorIcon from '../../../../icons/doorIcon.png';
import { Link } from 'react-router-dom';

function Navbar() {
    
  return (
    <div className='flex justify-around text-white'>
        {/* == Logo == */}
        <div className="logo">

            <img src={macroMavenLogo} alt="macromaven website logo" className='w-8'/>
            
        </div>
        {/* == options == */}
        <div className="navbar-options flex items-center">
            <ul className='flex gap-3 font-semibold'>

                <li className='cursor-pointer'><Link to='/home'>Home</Link></li>
                <li className='cursor-pointer'><Link to='/profile'>Profile</Link> </li>
                <li className='cursor-pointer'><Link to='/chat'>Chat</Link></li>
                <li className='cursor-pointer'><Link to='/nutritionsearch'>Nutrition</Link></li>
                <li className='cursor-pointer'><Link to='/blogs'>Blogs</Link></li>

            </ul>
        </div>

        {/* == logout == */}
        <div className="logo">
            <img src={doorIcon} alt="open door icon" className='w-6'/>
        </div>
    </div>
  )
}

export default Navbar