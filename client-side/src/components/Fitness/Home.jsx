import React, { useEffect } from "react";
import Sidebar from "../utils/main/Sidebar";
import DailyActivity from "../utils/dailyActivity/DailyActivity";
import Diet from "../utils/diet/Diet";
import Nutrition from "../utils/nutrition/Nutrition";
import Quote from "../utils/quotes/Quote";
import { BmiContextProvider } from "../../Contexts/BmiDataContextProvider";
import { DietContextProvider } from "../../Contexts/SuggestedDietContextProvider";


const HomePage = () => {


    
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
            </div>
        </div>
    )
}

export default HomePage;
