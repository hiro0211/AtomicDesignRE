import React, { createContext } from "react";
import "../src/styles.css";
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "ありどめ";
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
