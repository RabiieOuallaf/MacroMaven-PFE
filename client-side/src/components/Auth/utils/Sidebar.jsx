import React from "react";
import MacroMavenLogo from '../../../icons/MacroMavenLogo.png';
import usersIcon from '../../../icons/usersIcon.png';
import MainpageIcon from '../../../icons/MainpageIcon.png';
import BlogsIcon from '../../../icons/BlogsIcon.png';
import dietIcon from '../../../icons/dietIcon.png';
import chatIcon from '../../../icons/chatIcon.png';
import doorIconblack from '../../../icons/doorIconblack.png';
import { useNavigate } from 'react-router-dom';





const Sidebar = () => {
    // hook that creat a history object to make it possible to push new URL to the broweser's history
    const Navigate = useNavigate();
    // Sample switch case to handle the user's behavior   
    const handleIconClick = (id) => {
        switch (id) {
            case 'users':
                Navigate('/user');
                break;
            case 'main':
                Navigate('/main');
                break;
            case 'blogs':
                Navigate('/blogs');
                break;
            case 'diet':
                Navigate('/diet');
                break;
            case 'chat':
                Navigate('/chat');
                break;
            case 'logout':
                // Logout function will go here later
                break;
            default:
                break;
        }
    };
    // Map that contain icons data , just to ehance the quality of the code.
    const icons = [
        { id: 'users', src: usersIcon, alt: 'Two user icons' },
        { id: 'main', src: MainpageIcon, alt: 'Min page icon' },
        { id: "blogs", src: BlogsIcon, alt: "blogs page icon" },
        { id: "diet", src: dietIcon, alt: "diet page icon" },
        { id: "chat", src: chatIcon, alt: "chat page icon" },
        { id: "logout mt-16", src: doorIconblack, alt: "logout icon icon" }

    ]
    return (

        <div className="sidebar bg-white w-[7%] h-screen flex flex-col gap-5 items-center">

            {/* == Macro maven logo section == */}
            <div className="macromvan-logo mt-5 mb-10 cursor-pointer">
                <img src={MacroMavenLogo} alt="Macro maven logo" className="w-10" />
            </div>
            {icons.map((icon) => (
                <div
                    key={icon.id}
                    className={`${icon.id} mt-4 my-2 cursor-pointer`}
                    onClick={() => handleIconClick(icon.id)}
                >
                    <img src={icon.src} alt={icon.alt} className="w-6" />
                </div>
            ))}


        </div>
    );
}

export default Sidebar;