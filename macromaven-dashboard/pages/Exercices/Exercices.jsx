import React, { useEffect, useState } from 'react'
import { BsBackspaceFill } from 'react-icons/bs';
import {AiFillEdit, AiOutlinePlusCircle} from 'react-icons/ai';
import {exercice} from '@/public/images/exercice.png';
import Sidebar from '@/components/Sidebar';
import axios from 'axios';
import { useRouter } from 'next/router';

function Exercices() {

    const [exercices , setExercices] = useState();
    const router = useRouter();

    useEffect( () =>  {
        axios.get('http://127.0.0.1:8000/api/fitness/getexercices')
        .then( (response) =>  {
            console.log(response);
            setExercices(response.data.Exercices)
        })
        .catch( (erorr) => {
            console.log(erorr)
        })

    }, [])

    const NavigateToAnotherPage = (page, id) => {
        switch(page){
            case 'add':
                router.push('/Exercices/AddExercice');
                break;
            case 'update':
                router.push(`/Exercices/UpdateExercice?id=${id}`);
                break;
            default:
                break;
                
        }
    }
    return (
        <div className='bg-gray-900 min-h-screen'>
            <Sidebar />
            <div className='flex justify-between px-4 pt-4 ml-24'>
                <h2 className='text-white font-semibold text-lg'>Exercices</h2>
                <h2 className='text-white font-semibold text-lg'>Wlecome back, <span className='text-white font-bold'>Rabie</span></h2>
            </div>

            <div className="p-4 mx-[12%] my-4 flex gap-5">
            <div className="w-full m-auto- p-4 border rounded-lg bg-white overflow-y-auto">
  <table className="w-full">
    <thead>
      <tr className="my-3 font-semibold grid md:grid-cols-7 sm:grid-cols-6 grid-cols-5 items-center justify-between cursor-pointer">
        <th>Exercice image</th>
        <th>Exercice name</th>
        <th className='hidden md:grid'>Sets</th>
        <th className='sm:text-left text-right'>Repetition</th>
        <th className='hidden md:grid'>Category</th>
        <th className='hidden md:grid'>Delete</th>
        <th className='hidden md:grid'>Update</th>
      </tr>
    </thead>
    <tbody>
      {exercices && exercices.map((exercice, index) => (
        <tr key={index} className='bg-gray-200 hover:bg-gray-300 duration-200 ease-in rounded-md hover:rounded-2xl my-3 p-2 grid md:grid-cols-7 sm:grid-cols-6 grid-cols-5'>
          <td>
            <div className="flex items-center">
              <div className="bg-purple-100">
                <img src={exercice.exercice_image} alt="exercice" />
              </div>
            </div>
          </td>
          <td className='pl-4 justify-center'>{exercice.exercice_name}</td>
          <td className='hidden md:flex justify-center'>{exercice.exercice_sets}</td>
          <td className='sm:text-left text-right justify-center'>{exercice.exercice_repetition}</td>
          <td className='hidden md:flex justify-center'>{exercice.exercice_category}</td>
          <td className='hidden md:flex justify-center'>
            <p className='font-bold text-red-500'><BsBackspaceFill cursor={'pointer'}/></p>
          </td>
          <td className='hidden md:flex justify-center'>
            <p className='font-bold text-red-500'><AiFillEdit cursor={'pointer'} onClick={() => NavigateToAnotherPage('update', exercice.id)}/></p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


                <div className="add-exercice">
                    <AiOutlinePlusCircle color='white' size={30} cursor={'pointer'} onClick={() => NavigateToAnotherPage('add')}/>
                </div>
                
            </div>
        </div>
    )
}

export default Exercices