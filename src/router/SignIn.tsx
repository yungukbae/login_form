import { useContext, useState } from "react";
import { SignUpUser } from "../api/auth";
import { createTodo } from "../api/todo";
import { AuthContext } from "../context/AuthProvider";

const SignIn = () => {
  const { token, getToken } = useContext(AuthContext);
  const [auth, isAuth] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    isAuth({ email: e.target.value, password: auth.password });
  };

  const handlePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    isAuth({ password: e.target.value, email: auth.email });
  };

  const handleSubmit = async () => {
    try {
      const res = await SignUpUser(auth);
      if (res) {
        getToken(res.data.access_token);
      }
      console.log("response:", res);
    } catch (e) {
      console.log(e);
    }
  };

  const create = async () => {
    try {
      const res = await createTodo(token, "test");
      console.log("create:", res);
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <>
      <label htmlFor="email">Email</label>
      <input onChange={handleId} id="email" type="text" />
      <label htmlFor="password">PW</label>
      <input onChange={handlePW} id="password" type="text" />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={create}>CreateTodo</button>
    </>
  );
};

export default SignIn;
