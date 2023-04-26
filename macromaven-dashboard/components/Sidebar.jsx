import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {RxDashboard, RxPerson, RxSketchLogo} from 'react-icons/rx'
import { IoFitness, IoMdFitness, IoMdHeart } from "react-icons/io";

function Sidebar() {
  return (
    <div className='flex '>
        <div className='fixed w-20 h-screen bg-white bordre-r-[1px] flex  flex-col justify-between'>
            <div className="flex flex-col items-center my-8">
                {/* Logo */}
                <Link href='/'>
                    <div>
                        <RxSketchLogo size={20}/>
                    </div>
                </Link>

                {/* Option */}
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>

                <Link href='/'>
                    <div className='bg-gray-200  hover:bg-gray-100 duration-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <RxDashboard size={20}/>
                    </div>
                </Link>

                {/* Option */}
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>

                <Link href='/Users'>
                    <div className='bg-gray-200 hover:bg-gray-100 duration-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <RxPerson size={20}/>
                    </div>
                </Link>

                {/* Option */}
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>

                <Link href='/Exercices/Exercices'>
                    <div className='bg-gray-200 hover:bg-gray-100 duration-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <IoMdFitness size={20}/>
                    </div>
                </Link>

                {/* Option */}
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>

                <Link href='/'>
                    <div className='bg-gray-200 hover:bg-gray-100 duration-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <IoMdHeart size={20}/>
                    </div>
                </Link> 

            </div>
        </div>
        <main className='ml-20 w-full'>
        </main>    
    </div>
  )
}

export default Sidebar