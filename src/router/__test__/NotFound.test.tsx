import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";

describe("NotFound", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("UI Test", async () => {
    render(<NotFound />);
    screen.debug();
    await screen.findByText("Page Not Found");
  });
});
