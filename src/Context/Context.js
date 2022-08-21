import { createContext, useState } from "react";

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [lang, setLang] = useState("UZ");
  const [pro, setPro] = useState(true);
  const [service, setService] = useState(false);
  return (
    <MyContext.Provider value={{ lang, setLang, pro, setPro, service, setService}}>
      {children}
    </MyContext.Provider>
  );
};
