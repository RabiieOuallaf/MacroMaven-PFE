import axios from "axios";
import { createContext, useContext, useState } from "react";

const BmiContext = createContext();


export const BmiContextProvider = ({ children }) => {
  const [bmiData, setBmiData] = useState({
    bmi: Number,
    comment: "",
    status: "",

  });

  const getUserBmiData = (height, weight, gender, user_id) => {
    axios.post('http://127.0.0.1:8000/api/fitness/bmiCalculator', { height, weight, gender, user_id })
      .then((response) => {
        const newBmiData = {
          bmi: response.data.original.original.results.bmi,
          comment: response.data.original.original.results.status,
          status: response.data.original.original.results.comment
        }

        setBmiData(newBmiData);
      })

      .catch((error) => {
        console.log(error);
      })
  }

  const getSavedUserBmiData = () => { 
    return bmiData;
  }



  return (

    <BmiContext.Provider value={{ bmiData, getUserBmiData , getSavedUserBmiData}}>
      {children}
    </BmiContext.Provider>
  );
};

export const useStateContext = () => useContext(BmiContext)

