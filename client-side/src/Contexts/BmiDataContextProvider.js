import { createContext, useContext, useState } from "react";

 const BmiContext = createContext();


export const BmiProvider = ({ children }) => {
  const [bmiData, setBmiData] = useState({
    bmi: Number,
    comment: "",
    status: "",
  });

  const updateBmiData = (newBmiData) => {  // update the bmi value (We're getting the bmi data from BmiCalculator.jsx component)
    setBmiData(newBmiData);
  };
  
  return (
    <BmiContext.Provider value={{ bmiData, updateBmiData }}>
      {children}
    </BmiContext.Provider>
  );
};

export const useStateContext = () => useContext(BmiContext)

