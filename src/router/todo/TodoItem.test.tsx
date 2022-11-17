import { render, screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import TodoItem from "./TodoItem";
import useTodo from "../../hooks/useTodo";

// const mockFn = jest.fn();

describe("TodoItem", () => {
  let item = { id: 1, todo: "todo", isCompleted: false, userId: 1 };
  //   const { result } = renderHook(useTodo);
  const handleDelete = (id: number) => Promise.resolve();
  const handleUpdate = (
    id: number,
    body: {
      todo: string;
      isCompleted: boolean;
    }
  ) => {
    item.todo = body.todo;
    item.isCompleted = body.isCompleted;
    return Promise.resolve();
  };

  test("Normal State UI Test", () => {
    render(
      <TodoItem
        item={item}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    );
    const todoTxt = screen.getByText("todo");
    const checkBoxEl = screen.getByRole("checkbox");
    const btnEl = screen.getAllByRole("button");
    expect(todoTxt).toBeInTheDocument();
    expect(checkBoxEl).toBeInTheDocument();
    expect(btnEl.length).toBe(2);
  });

  test("Modified UI Test", async () => {
    render(
      <TodoItem
        item={item}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    );
    const modBtnEl = screen.getByRole("button", { name: "수정" });
    await userEvent.click(modBtnEl);

    const inputEl = screen.getByRole("textbox");
    const btnEl = screen.getAllByRole("button");
    expect(inputEl).toHaveValue(item.todo);
    expect(btnEl.length).toBe(2);
  });

  test("Function Test", async () => {
    render(
      <TodoItem
        item={item}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    );
    const modBtnEl = screen.getByRole("button", { name: "수정" });
    await userEvent.click(modBtnEl);

    const inputEl = screen.getByRole("textbox");
    await userEvent.clear(inputEl);
    await userEvent.type(inputEl, "test");
    expect(inputEl).toHaveValue("test");

    const saveBtnEl = screen.getByRole("button", { name: "저장" });
    await act(async () => {
      await userEvent.click(saveBtnEl);
    });

    const savedEl = screen.getByText("test");
    expect(savedEl).toBeInTheDocument();

    const checkBoxEl = screen.getByRole("checkbox");
    expect(checkBoxEl).toBeInTheDocument();
    await userEvent.click(checkBoxEl);
    expect(item.isCompleted).toBe(true);
  });
});
