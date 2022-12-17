import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import MswTest from "../MswTest";

test("render correctly", async () => {
  render(<MswTest />);
  const itemEl = await screen.findAllByRole("article");
  expect(itemEl).toHaveLength(4);
});

test("renders error", async () => {
  server.use(
    rest.get("https://jsonplaceholder.typicode.com/posts", (_req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<MswTest />);
  await screen.findByText("error");
});
