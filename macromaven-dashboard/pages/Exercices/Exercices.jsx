import React from 'react'
import { BsBackspaceFill } from 'react-icons/bs';
import {AiFillEdit, AiOutlinePlusCircle} from 'react-icons/ai';
import {exercice} from '@/public/images/exercice.png';
import Sidebar from '@/components/Sidebar';

function Exercices() {
    return (
        <div className='bg-gray-900 min-h-screen'>
            <Sidebar />
            <div className='flex justify-between px-4 pt-4 ml-24'>
                <h2 className='text-white font-semibold text-lg'>Exercices</h2>
                <h2 className='text-white font-semibold text-lg'>Wlecome back, <span className='text-white font-bold'>Rabie</span></h2>
            </div>

            <div className="p-4 mx-[12%] my-4 flex gap-5">
                <div className="w-full m-auto- p-4 border rounded-lg bg-white overflow-y-auto">
                    <div className="my-3 font-semibold grid md:grid-cols-7 sm:grid-cols-6 grid-cols-5 items-center justify-between cursor-pointer">
                        <span>Exercice image</span>
                        <span>Exercice name</span>
                        <span className='hidden md:grid'>Sets</span>
                        <span className='sm:text-left text-right'>Repetition</span>
                        <span className='hidden md:grid'>Category</span>
                        <span className='hidden md:grid'>Delete</span>
                        <span className='hidden md:grid'>Update</span>


                    </div>

                    <ul>
                        <li className='bg-gray-200 hover:bg-gray-300 duration-200 ease-in rounded-md hover:rounded-2xl my-3 p-2 grid md:grid-cols-7 sm:grid-cols-6 grid-cols-5'>
                            <div className="flex items-center">
                                <div className="bg-purple-100">
                                    <img src={exercice} alt="exercice" />
                                </div>
                            </div>
                                <p className='pl-4'>Rabie ouallaf</p>
                            <p className='hidden md:flex'>22</p>
                            <p className='hidden md:flex'>18</p>
                            <p className='hidden md:flex'>mediterranean</p>
                            <div className='sm:flex hidden justify-between items-center'>
                                <p className='font-bold text-red-500'><BsBackspaceFill cursor={'pointer'}/></p>
                                <p className='font-bold text-red-500'><AiFillEdit cursor={'pointer'}/></p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="add-exercice">
                    <AiOutlinePlusCircle color='white' size={30} cursor={'pointer'}/>
                </div>
                
            </div>
        </div>
    )
}

export default Exercices