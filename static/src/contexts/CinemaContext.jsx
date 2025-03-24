import {createContext, useState, useContext} from "react";

const CinemaContext = createContext();

export const CinemaProvider = ({children}) => {

  const [province, setProvince] = useState("all")
  const [country, setCountry] = useState("all")
  
  return (
    <CinemaContext.Provider value={{
      province,
      setProvince,
      country,
      setCountry
    }}>
      {children}
    </CinemaContext.Provider>
  )
}

export const useCinema = () => useContext(CinemaContext);
