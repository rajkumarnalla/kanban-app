import { createContext, useState } from "react";


export const CommonContext = createContext();

export function CommonTaskProvider({ children }) {

  const [groupByValue, setGroupByValue] = useState('status');
  const [groupWiseTicketsCount, setGroupWiseTicketsCount] = useState({});
  const [orderByValue, setOrderByValue] = useState('priority');


  const contextData = {
    groupByValue,
    orderByValue,
    groupWiseTicketsCount,
    setGroupByValue,
    setOrderByValue,
    setGroupWiseTicketsCount
  }

  return (
    <CommonContext.Provider value={contextData}>
      {children}
    </CommonContext.Provider>
  );
}