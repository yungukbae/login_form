import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { todoInstance } from "../api/axios";
import { setInterceptors } from "../api/interceptors";

const useTodo = () => {
  const { token } = useContext(AuthContext);
  const AuthorizedInstance = setInterceptors(todoInstance, token);

  const CreateTodo = (text: string) => {
    return AuthorizedInstance.post("/", { todo: text });
  };

  const GetTodos = () => {
    return AuthorizedInstance.get("/");
  };

  const UpdateTodo = (
    id: number,
    body: { todo: string; isCompleted: boolean }
  ) => {
    return AuthorizedInstance.put(`/${id}`, body);
  };

  const DeleteTodo = (id: number) => {
    return AuthorizedInstance.delete(`/${id}`);
  };

  return { CreateTodo, GetTodos, UpdateTodo, DeleteTodo };
};

export default useTodo;
