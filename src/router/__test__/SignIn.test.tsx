import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import SignIn from "../SignIn";

test("UI TEST", async () => {
  await renderWithRouter(<SignIn />, { route: "/" });
  await screen.findAllByText(/로그인/);
  const inputEl = screen.getByRole("textbox", { name: "이메일" });
  expect(inputEl).toBeInTheDocument();
  await userEvent.type(inputEl, "테수트");
  expect(inputEl).toHaveValue("테수트");
});

function renderWithRouter(
  Component: React.ReactElement,
  options: { route: string }
) {
  return render(
    <MemoryRouter initialEntries={[options.route]}>{Component}</MemoryRouter>
  );
}
