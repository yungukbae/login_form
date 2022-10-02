import { todos } from "./axios";
import { setInterceptors } from "./interceptors";

function createTodo(token: string, text: string) {
  const authInstance = setInterceptors(todos, token);
  return authInstance.post("/", { todo: text });
}

function getTodos(token: string) {
  const authInstance = setInterceptors(todos, token);
  return authInstance.get("/");
}

function updateTodo(
  token: string,
  id: number,
  body: { todo: string; isCompleted: boolean }
) {
  const authInstance = setInterceptors(todos, token);
  return authInstance.put(`/${id}`, body);
}

function deleteTodo(token: string, id: number) {
  const authInstance = setInterceptors(todos, token);
  return authInstance.delete(`/${id}`);
}

export { createTodo, getTodos, updateTodo, deleteTodo };
