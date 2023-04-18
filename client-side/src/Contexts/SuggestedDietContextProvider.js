import axios from "axios";
import { createContext, useContext, useState } from "react";

const DietContext = createContext();


export const DietContextProvider = ({ children }) => {

    const [SuggestedDiet, setSuggestedDiet] = useState();

    const getSuggestedDiet = (url, id, bmi) => {
        axios.post(url, { id, bmi })
            .then((response) => {
                setSuggestedDiet(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <DietContext.Provider value={{ getSuggestedDiet, SuggestedDiet }}>
            {children}
        </DietContext.Provider>
    )
};


export const useDietContext = () => useContext(DietContext);
