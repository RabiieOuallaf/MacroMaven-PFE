import Sidebar from '@/components/Sidebar'
import Head from 'next/head'
import React from 'react'
import { BsPersonFill, BsBackspaceFill } from 'react-icons/bs'

function Users() {
  return (
    <div className="Users-container bg-gray-900 min-h-screen">
      <Sidebar />

      <div className='flex justify-between px-4 pt-4 ml-24'>
        <Head>
          <h2 className='text-white font-semibold text-lg'>Users</h2>
        </Head>
        <h2 className='text-white font-semibold text-lg'>Wlecome back, <span className='text-white font-bold'>Rabie</span></h2>
      </div>
      <div className="w-[70%]  mx-[20%] my-8 m-auto- p-4 border rounded-lg bg-white overflow-y-auto">
      <table className="w-full">
    <thead>
      <tr className="my-3 font-semibold grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-center justify-between cursor-pointer">
        <th>Full name</th>
        <th className='hidden md:grid'>Age</th>
        <th className='sm:text-left text-right'>Current BMI</th>
        <th className='hidden md:grid'>Current Diet</th>
        <th className='hidden md:grid'>Delete</th>
      </tr>
    </thead>
    <tbody>
        <tr className='bg-gray-200 hover:bg-gray-300 duration-200 ease-in rounded-md hover:rounded-2xl my-3 p-2 grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3'>
          <td>
          <div className="flex items-center">
                <div className="bg-purple-100">
                  <BsPersonFill className='text-purple-800' />
                </div>
                <p className='pl-4 justify-center'>Rabie Ouallaf</p>
              </div>
          </td>
          <td className='hidden md:flex justify-center'>18</td>
          <td className='sm:text-left text-right justify-center'>22</td>
          <td className='hidden md:flex justify-center'>mediterranean</td>
          <td className='hidden md:flex justify-center'>
            <p className='font-bold text-red-500'><BsBackspaceFill cursor={'pointer'} onClick={() => handleDeleteRequest(exercice.id)}/></p>
          </td>
          
        </tr>
    </tbody>
  </table>
  </div>
        
    </div>

  )
  
}

export default Users