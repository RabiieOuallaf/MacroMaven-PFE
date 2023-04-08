import React from "react";
import Sidebar from "../utils/main/Sidebar";
import DailyActivity from "../utils/dailyActivity/DailyActivity";
import Diet from "../utils/diet/Diet";
import Nutrition from "../utils/nutrition/Nutrition";

const HomePage = () => {
    return(
        <div className="h-screen grid-cols-1 grid-rows-1 sm:grid-cols-2">
            {/* == The sidebar == */}
            <Sidebar/>
            {/* == daily activity == */}
            <DailyActivity />
            {/* == diet == */}
            <Diet />
            {/* == nutrition == */}
            <Nutrition className="order-last"/>       
                 

        </div>
    )
}

export default HomePage;