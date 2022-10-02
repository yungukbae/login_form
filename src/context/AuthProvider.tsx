import React, { createContext, ReactNode, useState } from "react";

export const AuthContext = createContext({
  token: "",
  getToken: (token: string) => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const getToken = (token: string) => {
    setToken(token);
  };

  const [token, setToken] = useState<string>("");

  const state = { token, getToken };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
