import React from 'react';
import chatBubble from '../../../icons/chatBubble.png';
import chatgpt from '../../../icons/chatgpt.png';


function Sidechat() {
    const chatOptions = [
        { optionName: 'All', icon: chatBubble },
        { optionName: 'Ai', icon: chatgpt }
    ]
    return (
        <div className='bg-slate-950 w-[10%] h-[87.5%] flex flex-col gap-5 items-center absolute top-[12.5%]'>
            {chatOptions.map((chatOption) => (
                <div className="chat-option flex justify-center items-center flex-row gap-4">
                    <img src={chatOption.icon} alt='chat icon' className='w-5'/>
                    <h4 className='text-white hover:text-blue-500 duration-300 ease-in cursor-pointer'>{chatOption.optionName}</h4>
                </div>
            ))}
        </div>
    )
}

export default Sidechat     