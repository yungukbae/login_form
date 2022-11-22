import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoListPresenter from "../TodoListPresenter";

describe("TodoListPresenter", () => {
  let items = [
    { id: 1, todo: "todo", isCompleted: false, userId: 1 },
    { id: 2, todo: "todo2", isCompleted: false, userId: 1 },
    { id: 3, todo: "todo3", isCompleted: false, userId: 1 },
    { id: 4, todo: "todo4", isCompleted: false, userId: 1 },
  ];

  const handleDelete = (id: number) => {
    items = items.filter((v) => v.id !== id);
    return Promise.resolve();
  };

  const handleUpdate = (
    id: number,
    body: {
      todo: string;
      isCompleted: boolean;
    }
  ) => {
    let arr: typeof items = [];
    items.map((v) => {
      if (v.id === id) {
        arr.push({
          id: id,
          todo: body.todo,
          isCompleted: body.isCompleted,
          userId: v.userId,
        });
      } else {
        arr.push(v);
      }
    });

    items = arr;
    return Promise.resolve();
  };

  test("UI Test", () => {
    render(
      <TodoListPresenter
        data={items}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    );
    const blockEl = screen.getAllByTestId("testBlock");
    expect(blockEl.length).toBe(items.length);
  });

  test("Function Test", async () => {
    render(
      <TodoListPresenter
        data={items}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    );
    const btnEl = screen.getAllByRole("button", { name: "삭제" });
    expect(items.length).toBe(4);
    await userEvent.click(btnEl[1]);
    expect(items.length).toBe(3);
  });
});
