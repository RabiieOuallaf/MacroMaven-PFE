import { createContext, useContext, useState } from "react";

 const BmiContext = createContext();


export const BmiProvider = ({ children }) => {
  const [bmiData, setBmiData] = useState({
    bmi: Number,
    comment: "",
    status: "",
  });
  
  return (
    <BmiContext.Provider value={{ bmiData, setBmiData }}>
      {children}
    </BmiContext.Provider>
  );
};

export const useStateContext = () => useContext(BmiContext)

