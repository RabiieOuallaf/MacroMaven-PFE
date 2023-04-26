import React, { Suspense, useState, useEffect } from 'react';
import Sidebar from '../utils/main/Sidebar';
import SideBarWokout from '../utils/fitness/SideBarWokout';
import { Canvas } from '@react-three/fiber';
import { MaleMain } from '../ThreeModels/MaleMain';
import { OrbitControls } from '@react-three/drei';
import workout from '../../images/fitness/workout.png';
import axios from 'axios';
import Exercices from './Exercices';

function WorkoutPage() {
    const exerciesCategory = [
        { category: 'chest', id: 1 },
        { category: 'shoulders', id: 2 },
        { category: 'legs', id: 3 },
        { category: 'abs', id: 4 },
        { category: 'back', id: 5 },

    ]

    const [exercices, setExercices] = useState();


    const handleExerciceFetching = (category) => {
        switch (category) {
            case 'chest':
                axios.get('http://127.0.0.1:8000/api/fitness/getexercicebycategory', { params: { category_name: 'chest' } })
                    .then((response) => {
                        setExercices(response.data.exercices);

                    })
                    .catch((erorr) => {
                        console.log(erorr);
                    })
                break;
            case 'back':
                axios.get('http://127.0.0.1:8000/api/fitness/getexercicebycategory', { params: { category_name: 'back' } })
                    .then((response) => {
                        setExercices(response.data.exercices);

                    })
                    .catch((erorr) => {
                        console.log(erorr);
                    })
                break;
            case 'legs':
                axios.get('http://127.0.0.1:8000/api/fitness/getexercicebycategory', { params: { category_name: 'legs' } })
                    .then((response) => {
                        setExercices(response.data.exercices);

                    })
                    .catch((erorr) => {
                        console.log(erorr);
                    })
                break;
            case 'abs':
                axios.get('http://127.0.0.1:8000/api/fitness/getexercicebycategory', { params: { category_name: 'abs' } })
                    .then((response) => {
                        setExercices(response.data.exercices);

                    })
                    .catch((erorr) => {
                        console.log(erorr);
                    })
                break;
            case 'shoulders':
                axios.get('http://127.0.0.1:8000/api/fitness/getexercicebycategory', { params: { category_name: 'shoulders' } })
                    .then((response) => {
                        setExercices(response.data.exercices);

                    })
                    .catch((erorr) => {
                        console.log(erorr);
                    })
                break;
            default:
                axios.get('http://127.0.0.1:8000/api/fitness/getexercicebycategory', { params: { category_name: 'general' } })
                    .then((response) => {
                        setExercices(response.data.exercices);
                        
                    })
                    .catch((erorr) => {
                        console.log(erorr);
                    })
                    break;
        }


    }
    return (
        <section className='workout-page overflow-hidden'>
            <Sidebar color="slate-950" />
            <div className='bg-slate-800 w-[15%] flex flex-col gap-5 h-screen items-center justify-center absolute left-20'>

                <div className="exercise-category flex flex-col gap-10">
                    {
                        exerciesCategory.map((exerciesCategory) => (
                            <h3
                                className='text-white hover:text-blue-500 duration-200 font-semibold text-[24px] cursor-pointer'
                                onClick={() => handleExerciceFetching(exerciesCategory.category)}
                            >{exerciesCategory.category}</h3>
                        ))
                    }
                </div>


            </div>

            <div className="male-anatomy ml-[30%] w-[1070px] h-[360px] flex justify-center items-center" >
                <Canvas>
                    <OrbitControls enableZoom={true} />
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[-2, 5, 2]} intensity={.2} />
                    <Suspense fallback={null}>
                        <MaleMain />
                    </Suspense>

                </Canvas>
            </div>

            <Exercices
                exercices={exercices}
            />


        </section>
    )
}

export default WorkoutPage