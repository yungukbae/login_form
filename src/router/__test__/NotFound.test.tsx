import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import NotFound from "../NotFound";

// let callback = jest.fn();
//
beforeEach(() => {
  jest.useFakeTimers({ timerLimit: 5000 });
});

afterEach(() => {
  // callback.mockRestore();
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("NotFound", () => {
  test("UI Test", async () => {
    const callback = jest.fn();
    await act(async () => {
      await render(
        <MemoryRouter initialEntries={["/notfound"]}>
          <NotFound callback={callback} />
        </MemoryRouter>
      );
    });

    await act(() => {
      jest.advanceTimersByTime(1000);
      jest.advanceTimersByTime(1000);
      jest.advanceTimersByTime(1000);
    });
    await expect(callback).toHaveBeenCalledTimes(3);
    await screen.debug();
  });
});
