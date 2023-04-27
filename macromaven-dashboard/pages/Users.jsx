import Sidebar from '@/components/Sidebar'
import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { BsPersonFill, BsBackspaceFill } from 'react-icons/bs'
import Swal from 'sweetalert2'

function Users() {

  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/auth/getusers')
      .then((response) => {
        setUsers(response.data.Users)
        console.log(users[0].bmi[0].value)

      })
      .catch((erorr) => {
        console.log(erorr)
      })
  }, [])

  const handleDeleteRequest = (id) => {
    axios.delete('http://127.0.0.1:8000/api/auth/deleteuser', { params: { id } })
      .then((response) => {
        console.log(response);
        Swal.fire(
          'User deleted!',
          'success'
        )
      })
      .catch( (erorr) => {
        console.erorr(erorr);
        Swal.fire({
          title: 'Error!',
          text: 'Please try later!!',
          icon: 'error',
          confirmButtonText: 'Cool'
      });

      })
  }
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
            {users && users.map((user, index) => (
              <tr key={index} className='bg-gray-200 hover:bg-gray-300 duration-200 ease-in rounded-md hover:rounded-2xl my-3 p-2 grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3'>
                <td>
                  <div className="flex items-center">
                    <div className="bg-purple-100">
                      <BsPersonFill className='text-purple-800' />
                    </div>
                    <p className='pl-4 justify-center'>{user.name}</p>
                  </div>
                </td>
                <td className='hidden md:flex justify-center'>{user.birthday}</td>
                {user.bmi[index] ? (
                  <td className='sm:text-left text-right justify-center'>{user.bmi[index].value}</td>
                ) : 'BMI is not avialble yet!'}
                <td className='hidden md:flex justify-center'>mediterranean</td>
                <td className='hidden md:flex justify-center'>
                  <p className='font-bold text-red-500'><BsBackspaceFill cursor={'pointer'} onClick={() => handleDeleteRequest(user.id)} /></p>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>

  )

}

export default Users