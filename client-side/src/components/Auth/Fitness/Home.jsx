import React from "react";
import Sidebar from "../utils/Sidebar";
import DailyActivity from "../utils/dailyActivity/DailyActivity";

const HomePage = () => {
    return(
        <div className="bg-black h-screen grid-cols-2 grid-rows-2 sm:grid-cols-1">
            {/* == The sidebar == */}
            <Sidebar/>
            {/* == daily activity == */}
            <DailyActivity />
            

            

        </div>
    )
}

export default HomePage;