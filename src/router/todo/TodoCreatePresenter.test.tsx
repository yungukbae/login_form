import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoCreatePresenter from "./TodoCreatePresenter";

describe("TodoCreatePresenter", () => {
  let item = { id: 1, todo: "", isChecked: false, userId: 1 };
  const handleCreate = (todo: string) => {
    if (!todo || todo.length < 1) throw new Error();
    item.todo = todo;
    return Promise.resolve();
  };
  test("UI Test", () => {
    render(<TodoCreatePresenter handleCreate={handleCreate} />);
    const inputEl = screen.getByRole("textbox");
    const btnEl = screen.getByRole("button");
    expect(inputEl).toBeInTheDocument();
    expect(btnEl).toBeInTheDocument();
  });

  test("Function Test", async () => {
    render(<TodoCreatePresenter handleCreate={handleCreate} />);
    const inputEl = screen.getByRole("textbox");
    const btnEl = screen.getByRole("button");
    await userEvent.type(inputEl, "test");
    await userEvent.click(btnEl);
    expect(item.todo).toBe("test");
  });

  test("Error Test", async () => {
    render(<TodoCreatePresenter handleCreate={handleCreate} />);
    const btnEl = screen.getByRole("button");
    await userEvent.click(btnEl);
    expect(handleCreate).toThrow();
  });
});
