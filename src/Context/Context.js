import { createContext, useState } from "react";

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [lang, setLang] = useState("UZ");
  return (
    <MyContext.Provider value={{ lang, setLang }}>
      {children}
    </MyContext.Provider>
  );
};
