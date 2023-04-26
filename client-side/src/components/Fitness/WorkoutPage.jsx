import React, { Suspense } from 'react';
import Sidebar from '../utils/main/Sidebar';
import SideBarWokout from '../utils/fitness/SideBarWokout';
import { Canvas } from '@react-three/fiber';
import { MaleMain } from '../ThreeModels/MaleMain';
import { OrbitControls } from '@react-three/drei';
import  workout  from '../../images/fitness/workout.png';

function WorkoutPage() {
    return (
        <section className='workout-page overflow-hidden'>
            <Sidebar color="slate-950" />
            <SideBarWokout />

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

            <div className="suggested-exercices flex flex-nowrap overflow-x-auto justify-center mx-[30%] w-[60%]">
                <div className="exercice-container w-1/4 mx-8 flex flex-col justify-center my-3 flex-shrink-0">
                    <div className="exercice-image flex justify-center">
                        <img src={workout} alt="exercice picutre" className='w-28'/>
                    </div>
                    <div className="exercice-details text-center">
                        <h3 className='font-semibold'>Bar lift</h3>
                        <h4>4 sets * 12 reps</h4>
                    </div>
                </div>

                <div className="exercice-container w-1/4 mx-8 flex flex-col justify-center flex-shrink-0">
                    <div className="exercice-image flex justify-center">
                        <img src={workout} alt="exercice picutre" className='w-28'/>
                    </div>
                    <div className="exercice-details text-center">
                        <h3 className='font-semibold'>Bar lift</h3>
                        <h4>4 sets * 12 reps</h4>
                    </div>
                </div>

                <div className="exercice-container w-1/4 mx-8 flex flex-col justify-center flex-shrink-0">
                    <div className="exercice-image flex justify-center">
                        <img src={workout} alt="exercice picutre" className='w-28'/>
                    </div>
                    <div className="exercice-details text-center">
                        <h3 className='font-semibold'>Bar lift</h3>
                        <h4>4 sets * 12 reps</h4>
                    </div>
                </div>  
                
                 
            
            </div>
        </section>
    )
}

export default WorkoutPage