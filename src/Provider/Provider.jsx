"use client";

import { createContext, useState } from "react";

export const LanguageContext = createContext("en");
function Provider({ children }) {
  const [lng, setLng] = useState("en");

  return (
    <LanguageContext.Provider value={{ lng, setLng }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default Provider;
