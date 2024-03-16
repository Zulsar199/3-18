import { createContext } from "react";
import { useState } from "react";

export const Context = createContext([]);
export const ContextProvider = ({children}) => {
     const [name, setName] = useState("");
     return (
          <Context.Provider value={{name, setName}}>{children}</Context.Provider>
     )
}