import Sidebar from '@/components/Sidebar'
import React from 'react'
import { BsPersonFill, BsBackspaceFill } from 'react-icons/bs'

function Users() {
  return (
    <div className="Users-container bg-gray-900 min-h-screen">
      <Sidebar />

      <div className='flex justify-between px-4 pt-4 ml-24'>
        <h2 className='text-white font-semibold text-lg'>Users</h2>
        <h2 className='text-white font-semibold text-lg'>Wlecome back, <span className='text-white font-bold'>Rabie</span></h2>
      </div>
      <div className="p-4 mx-[12%] my-4">
        <div className="w-full m-auto- p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 font-semibold grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-center justify-between cursor-pointer">
            <span>Full name</span>
            <span className='hidden md:grid'>Age</span>
            <span className='sm:text-left text-right'>Current BMI name</span>
            <span className='hidden md:grid'>Current Diet</span>
            <span className='hidden md:grid'>Delete</span>

          </div>

          <ul>
            <li className='bg-gray-200 hover:bg-gray-300 duration-200 ease-in rounded-md hover:rounded-2xl my-3 p-2 grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3'>
              <div className="flex items-center">
                <div className="bg-purple-100">
                  <BsPersonFill className='text-purple-800' />
                </div>
                <p className='pl-4'>Rabie ouallaf</p>
              </div>
              <p className='hidden md:flex'>22</p>
              <p className='hidden md:flex'>18</p>
              <p className='hidden md:flex'>mediterranean</p>
              <div className='sm:flex hidden justify-between items-center'>
                <p className='font-bold text-red-500'>Delete <BsBackspaceFill /></p>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Users