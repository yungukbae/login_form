// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: "title", body: "body" },
        { id: 2, title: "title2", body: "body2" },
        { id: 3, title: "title3", body: "body3" },
        { id: 4, title: "title4", body: "body4" },
      ])
    );
  }),
];
