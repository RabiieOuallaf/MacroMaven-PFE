import React, { useEffect } from "react";
import Sidebar from "../utils/main/Sidebar";
import DailyActivity from "../utils/dailyActivity/DailyActivity";
import Diet from "../utils/diet/Diet";
import Nutrition from "../utils/nutrition/Nutrition";
import Quote from "../utils/quotes/Quote";
import { BmiContextProvider } from "../../Contexts/BmiDataContextProvider";
import { DietContextProvider } from "../../Contexts/SuggestedDietContextProvider";
import {Male} from '../ThreeModels/Male'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { MaleBack } from "../ThreeModels/MaleBack";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const Navigate = useNavigate();

    const navigateToExercicePage = () => {
        Navigate('/workout');
    } 
    
    return (

        <div className="h-screen w-full grid grid-rows-1 grid-cols-2">
            {/* == The sidebar == */}
            <Sidebar />
            <div className="first-half w-[91%] h-full ml-[7%] ">
                {/* == daily activity == */}
                <DailyActivity />
    
                {/* == diet == */}
                <DietContextProvider>
                    <BmiContextProvider>
                        <Diet />
                    </BmiContextProvider>
                </DietContextProvider>
                {/* == nutrition == */}
                <Nutrition />
            </div>
            <div className="second-half">
                {/* == Quotes == */}
                <Quote />
                <div className="flex justify-center items-center w-[100%] h-[68%]">
                <Canvas onClick={navigateToExercicePage} className="cursor-pointer">
                    <OrbitControls enableZoom={false}/>  
                    <ambientLight intensity={0.5}/> 
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <Suspense fallback={null}>
                        <Male />
                        <MaleBack />
                    </Suspense>
                    
                </Canvas>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage;
