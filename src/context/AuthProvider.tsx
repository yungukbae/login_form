import React, { createContext, useEffect, useState } from "react";
import { SignUpApi, SignInApi } from "../api/auth";

export const AuthContext = createContext({
  token: "",
  SignIn: (input: UserInput) => {},
  SignUp: (input: UserInput) => {},
});

const USER_INFO = "USER_INFO";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>("");
  const localStrage = window.localStorage;

  const SignIn = async (input: UserInput) => {
    const response = await SignInApi(input);
    getToken(response.data.access_token);
    return response;
  };

  const SignUp = async (input: UserInput) => {
    const response = await SignUpApi(input);
    getToken(response.data.access_token);
    return response;
  };

  const getToken = (input: string) => {
    setToken(input);
    localStrage.setItem(USER_INFO, input);
  };

  useEffect(() => {
    const getUserInfo = localStrage.getItem("USER_INFO");
    if (getUserInfo) {
      setToken(getUserInfo);
    }
  }, []);

  const state = { token, SignIn, SignUp };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
