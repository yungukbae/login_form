import React, { createContext, useEffect, useState } from "react";
import { SignInUser, SignUpUser } from "../api/auth";

interface UserInput {
  email: string;
  password: string;
}

export const AuthContext = createContext({
  token: "",
  SignIn: (input: UserInput) => {},
  SignOut: () => {},
  SignUp: (input: UserInput) => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>("");
  const localStrage = window.localStorage;

  const SignIn = async (input: UserInput) => {
    try {
      const res = await SignInUser(input);
      const USER_INFO = JSON.stringify({
        email: input.email,
        token: res.data.access_token,
      });
      setToken(res.data.access_token);
      localStrage.setItem("USER_INFO", USER_INFO);
      return res.status;
    } catch (err: any) {
      if (err.response) {
        return alert(err.response.data.message);
      }
      return err.status;
    }
  };

  const SignOut = () => {
    localStrage.clear();
    setToken("");
  };

  const SignUp = async (input: UserInput) => {
    try {
      const res = await SignUpUser(input);
      return res.status;
    } catch (err: any) {
      if (err.response) {
        return alert(err.response.data.message);
      }
      return err.status;
    }
  };

  useEffect(() => {
    const getUserInfo = localStrage.getItem("USER_INFO");
    if (getUserInfo) {
      setToken(JSON.parse(getUserInfo).token);
    }
  }, []);

  const state = { token, SignIn, SignOut, SignUp };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
