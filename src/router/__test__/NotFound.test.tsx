import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter, Router } from "react-router-dom";
import NotFound from "../NotFound";
import { createMemoryHistory } from "history";
import App from "../../App";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("NotFound", () => {
  test("UI Test", async () => {
    render(
      <MemoryRouter initialEntries={["/notfound"]}>
        <NotFound />
      </MemoryRouter>
    );

    await act(async () => {
      jest.advanceTimersByTime(1000);
      jest.advanceTimersByTime(1000);
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(
      screen.getByText(
        "잘못된 접근입니다. 2초후 메인(또는 로그인) 페이지로 이동합니다."
      )
    ).toBeInTheDocument();
  });

  test("useNavigation test", async () => {
    const history = createMemoryHistory();
    history.push("/");
    history.push("/notfound");
    const { rerender } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    await act(async () => {
      jest.advanceTimersByTime(1000);
      jest.advanceTimersByTime(1000);
      jest.advanceTimersByTime(1000);
    });
    history.back();
    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
  });
});
