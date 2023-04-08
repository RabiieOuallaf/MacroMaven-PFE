import React from "react";
import Sidebar from "../utils/main/Sidebar";
import DailyActivity from "../utils/dailyActivity/DailyActivity";
import Diet from "../utils/diet/Diet";
import Nutrition from "../utils/nutrition/Nutrition";
import Quote from "../utils/quotes/Quote";

const HomePage = () => {
    return (
        <div className="h-screen flex">
            {/* == The sidebar == */}
            <Sidebar />
            <div className="first-half h-full w-full ">
                {/* == daily activity == */}
                <DailyActivity />
                {/* == diet == */}
                <Diet />
                {/* == nutrition == */}
                <Nutrition className="order-last" />
            </div>

            <div className="second-half">

                {/* == Quotes == */}  
                <Quote />
            </div>



        </div>
    )
}

export default HomePage;