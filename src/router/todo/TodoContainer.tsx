import { Container } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import useTodo from "../../hooks/useTodo";
import TodoCreatePresenter from "./TodoCreatePresenter";
import TodoListPresenter from "./TodoListPresenter";

const TodoContainer = () => {
  const [list, setList] = useState([]);
  const { GetTodos, CreateTodo, DeleteTodo, UpdateTodo } = useTodo();

  const fetchList = useCallback(async () => {
    try {
      const res = await GetTodos();
      setList(res.data);
      return res;
    } catch (e) {
      return alert("투두 리스트를 갱신을 실패하였습니다.");
    }
  }, [GetTodos]);

  const createList = async (todo: string) => {
    try {
      const res = await CreateTodo(todo);
      fetchList();
      return res;
    } catch (e) {
      return alert("투두 리스트 생성에 실패하였습니다.");
    }
  };

  const deleteList = async (id: number) => {
    try {
      const res = await DeleteTodo(id);
      fetchList();
      return res;
    } catch (e) {
      return alert("삭제에 실패하였습니다.");
    }
  };

  const updateList = async (
    id: number,
    body: { todo: string; isCompleted: boolean }
  ) => {
    try {
      const res = await UpdateTodo(id, body);
      fetchList();
      return res;
    } catch (e) {
      return alert("수정에 실패하였습니다");
    }
  };

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line
  }, []);

  return (
    <Container
      sx={{
        height: "100vh",
        width: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TodoCreatePresenter handleCreate={createList} />
      <TodoListPresenter
        data={list}
        handleDelete={deleteList}
        handleUpdate={updateList}
      />
    </Container>
  );
};

export default TodoContainer;
