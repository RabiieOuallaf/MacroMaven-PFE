import React from "react";
import Sidebar from "../utils/main/Sidebar";
import DailyActivity from "../utils/dailyActivity/DailyActivity";
import Diet from "../utils/diet/Diet";

const HomePage = () => {
    return(
        <div className="h-screen grid-cols-2 grid-rows-1 sm:grid-cols-1">
            {/* == The sidebar == */}
            <Sidebar/>
            {/* == daily activity == */}
            <DailyActivity />
            {/* == diet == */}
            <Diet />
            

            

        </div>
    )
}

export default HomePage;