import { render, screen } from "@testing-library/react";
import MswTest from "../MswTest";

test("render correctly", async () => {
  render(<MswTest />);
  const itemEl = await screen.findAllByRole("article");
  expect(itemEl).toHaveLength(4);
});
