import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { todoInstance } from "./axios";
import { setInterceptors } from "./interceptors";

const useTodo = () => {
  const { token } = useContext(AuthContext);
  const AuthorizedInstance = setInterceptors(todoInstance, token);

  function createTodo(text: string) {
    return AuthorizedInstance.post("/", { todo: text });
  }

  function getTodos() {
    return AuthorizedInstance.get("/");
  }

  function updateTodo(
    id: number,
    body: { todo: string; isCompleted: boolean }
  ) {
    return AuthorizedInstance.put(`/${id}`, body);
  }

  function deleteTodo(id: number) {
    return AuthorizedInstance.delete(`/${id}`);
  }

  return { createTodo, getTodos, updateTodo, deleteTodo };
};

export default useTodo;
