"use client";

import {createContext, useContext, useEffect, useState} from "react";
import {checkLoginStatus} from "@/app/_lib/auth";

const AuthorizeContext = createContext();

function AuthorizeProvider({ children }) {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    setAuthorized(checkLoginStatus());
  }, [authorized]);

  return (
    <AuthorizeContext.Provider value={{ authorized, setAuthorized }}>
      {children}
    </AuthorizeContext.Provider>
  )
}

function useAuthorize() {
  const context = useContext(AuthorizeContext);

  if(context === undefined) throw new Error("Context was used outside provider");
  return context;
}

export {AuthorizeProvider, useAuthorize};