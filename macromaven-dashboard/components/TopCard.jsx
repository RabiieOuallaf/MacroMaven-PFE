import React from 'react'

function TopCard() {
  return (
    <div className='grid lg:grid-cols-4  sm:grid-cols-1 gap-4 p-4 mx-[15%]'>
        <div className='lg:col-span-2 col-span-1  bg-white flex justify-between w-full  my-4 border p-4 rounded-lg cursor-pointer hover:bg-gray-200 duration-300 ease-out'>
            <div className="flex flex-col w-full-pb-4">
                <p className='text-2xl font-bold'>5400</p>
                <p className='text-gray-600'>Users</p>
            </div>
            <p className='bg-green-200 hover:bg-green-300 duration-300 ease-in flex justify-center items-center p-2 rounded-lg'>
                <span>+18%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full  my-4 border p-4 rounded-lg cursor-pointer hover:bg-gray-200 duration-300 ease-out'>
            <div className="flex flex-col w-full-pb-4">
                <p className='text-2xl font-bold'>21</p>
                <p className='text-gray-600'>Average BMI</p>
            </div>

            <p className='bg-green-200 hover:bg-green-300 duration-300 ease-in flex justify-center items-center p-2 rounded-lg'>
                <span>+19%</span>
            </p>
        </div>
    </div>
  )
}

export default TopCard