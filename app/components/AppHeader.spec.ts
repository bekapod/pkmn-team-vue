import { render, within, screen, waitFor } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import AppHeader from "./AppHeader.vue";

const setup = (props = {}) =>
  render(AppHeader, { props, slots: { default: "Some page" } });

test("renders an accessible header", () => {
  setup();
  expect(screen.getByRole("banner").tagName).toBe("HEADER");
  expect(
    screen.getByRole("heading", { name: "Some page" }),
  ).toBeInTheDocument();
});

test("renders an accessible navigation", () => {
  setup();
  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getByRole("searchbox")).toBeInTheDocument();
});

test("it toggles main menu when button is clicked", async () => {
  const { container } = setup();
  userEvent.click(screen.getByRole("button", { name: "Open main menu" }));

  await waitFor(() =>
    expect(
      screen
        .getByRole("button", { name: "Open main menu" })
        .getAttribute("aria-controls"),
    ).not.toBeNull(),
  );
  const menuId = screen
    .getByRole("button", { name: "Open main menu" })
    .getAttribute("aria-controls");
  expect(
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    within(container.querySelector(`#${menuId}`)).getByRole("link", {
      name: "All Teams",
    }),
  ).toBeInTheDocument();
  expect(
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    within(container.querySelector(`#${menuId}`)).getByRole("link", {
      name: "My Teams",
    }),
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: "Open main menu" }));
  await waitFor(() =>
    expect(
      screen.getByRole("button", { name: "Open main menu" }),
    ).toHaveAttribute("aria-controls"),
  );
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector(`#${menuId}`)).toBeNull();
});

test("it toggles user menu when button is clicked", async () => {
  const { container } = setup();
  userEvent.click(screen.getByRole("button", { name: "Open user menu" }));

  await waitFor(() =>
    expect(
      screen
        .getByRole("button", { name: "Open user menu" })
        .getAttribute("aria-controls"),
    ).not.toBeNull(),
  );
  const menuId = screen
    .getByRole("button", { name: "Open user menu" })
    .getAttribute("aria-controls");
  expect(
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    within(container.querySelector(`#${menuId}`)).getByRole("menuitem", {
      name: "My Teams",
    }),
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: "Open user menu" }));
  await waitFor(() =>
    expect(
      screen.getByRole("button", { name: "Open user menu" }),
    ).toHaveAttribute("aria-controls"),
  );
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector(`#${menuId}`)).toBeNull();
});

test("it renders menu links", () => {
  setup();
  expect(screen.getByRole("link", { name: "All Teams" })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Team Builder" }),
  ).toBeInTheDocument();
});
