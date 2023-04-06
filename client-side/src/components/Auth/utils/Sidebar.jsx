import React from "react";
import MacroMavenLogo from '../../../icons/MacroMavenLogo.png';
import usersIcon from '../../../icons/usersIcon.png';
import MainpageIcon from '../../../icons/MainpageIcon.png';
import BlogsIcon from '../../../icons/BlogsIcon.png';
import dietIcon from '../../../icons/dietIcon.png';
import chatIcon from '../../../icons/chatIcon.png';
import doorIconblack from '../../../icons/doorIconblack.png'







const Sidebar = () => {
    return (
        <div className="sidebar bg-white w-[7%] h-screen flex flex-col gap-5 items-center">

            {/* == Macro maven logo section == */}
            <div className="macromvan-logo mt-5 mb-10 cursor-pointer">
                <img src={MacroMavenLogo} alt="Macro maven logo" className="w-10" />
            </div>

            {/* == Users logo section == */}
            <div className="Users mt-4 my-2 cursor-pointer">
                <img src={usersIcon} alt="Two userr icon" className="w-6" />
            </div>

            {/* == Main page icon section == */}
            <div className="main mt-4 my-2 cursor-pointer">
                <img src={MainpageIcon} alt="main page icon" className="w-6" />
            </div>

            {/* == Blogs page icon section == */}
            <div className="Blogs mt-4 my-2 cursor-pointer">
                <img src={BlogsIcon} alt="blogs page icon" className="w-6" />
            </div>

            {/* == Diet page icon section == */}
            <div className="Blogs mt-4 my-2 cursor-pointer">
                <img src={dietIcon} alt="diet page icon" className="w-6" />
            </div>

            {/* == Chat page icon section == */}
            <div className="Chat mt-4 my-2 cursor-pointer">
                <img src={chatIcon} alt="chat page icon" className="w-6" />
            </div>

            {/* == Logout icon == */}
            <div className="Chat mt-16 cursor-pointer">
                <img src={doorIconblack} alt="logout icon icon" className="w-6 text-black" />
            </div>

            
        </div>
    );
}

export default Sidebar;