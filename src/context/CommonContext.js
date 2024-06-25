import { createContext, useState } from "react";


export const CommonContext = createContext();

export function CommonTaskProvider({ children }) {

  const [groupByValue, setGroupByValue] = useState('status');
  const [orderByValue, setOrderByValue] = useState('priority');


  const contextData = {
    groupByValue,
    orderByValue,
    setGroupByValue,
    setOrderByValue
  }

  return (
    <CommonContext.Provider value={contextData}>
      {children}
    </CommonContext.Provider>
  );
}