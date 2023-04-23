import React, { Suspense } from 'react'
import Sidebar from '../utils/main/Sidebar'
import SideBarWokout from '../utils/fitness/SideBarWokout'
import { Canvas } from '@react-three/fiber'
import { MaleMain } from '../ThreeModels/MaleMain'
import { OrbitControls } from '@react-three/drei'

function WorkoutPage() {
    return (
        <section className='workout-page overflow-hidden'>
            <Sidebar color="slate-950" />
            <SideBarWokout />

            <div className="male-anatomy ml-[30%] w-[1070px] h-[410px] flex justify-center items-center" >
                <Canvas>
                    <OrbitControls enableZoom={true} />
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[-2, 5, 2]} intensity={.2} />
                    <Suspense fallback={null}>
                        <MaleMain />
                    </Suspense>

                </Canvas>
            </div>
        </section>
    )
}

export default WorkoutPage