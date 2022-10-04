import { useState } from "react";
import { SignUpUser } from "./api/auth";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignInPage from "./router/SignInPage";
import SignUp from "./router/SingUp";
import TodoContainer from "./router/todo/TodoContainer";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todos" element={<TodoContainer />} />
      <Route path="/page3" element={<div>page3</div>} />
    </Routes>
  );
};

function App() {
  // const [auth, isAuth] = useState<{ email: string; password: string }>({
  //   email: "",
  //   password: "",
  // });

  // const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   isAuth({ email: e.target.value, password: auth.password });
  // };

  // const handlePW = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   isAuth({ password: e.target.value, email: auth.email });
  // };

  // const handleSubmit = async () => {
  //   try {
  //     const res = await SignUpUser(auth);
  //     console.log("response:", res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
