import { createContext, useState } from "react";
import horoscopesObj from "../data/horoscopes";

export const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Aries");
  const sign = horoscopesObj[currentSign];
  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export const HoroscopeContext = createContext();
