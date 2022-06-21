/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useAuth0 } from "@auth0/auth0-vue";
import userEvent from "@testing-library/user-event";
import { render, within, screen, waitFor } from "@testing-library/vue";
import AppHeader from "./AppHeader.vue";
import type { MockedFunction } from "vitest";
import { useTrainer } from "@/stores";
import { globalPlugins } from "@/test-helpers";

vitest.mock("@auth0/auth0-vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { ref } = require("vue");
  return {
    useAuth0: vitest.fn().mockReturnValue({
      loginWithRedirect: vitest.fn(),
      logout: vitest.fn(),
      isAuthenticated: ref(false),
      error: ref(null),
    }),
    createAuth0: vitest.fn(),
  };
});

const setup = (props = {}) =>
  render(AppHeader, {
    props,
    slots: { default: "Some page" },
    global: {
      plugins: globalPlugins,
    },
  });

test("renders an accessible header", () => {
  setup();
  expect(screen.getByRole("banner").tagName).toBe("HEADER");
  expect(
    screen.getByRole("heading", { name: "Some page" })
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
        .getAttribute("aria-controls")
    ).not.toBeNull()
  );
  const menuId = screen
    .getByRole("button", { name: "Open main menu" })
    .getAttribute("aria-controls");
  expect(
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    within(container.querySelector(`#${menuId}`)!).getByRole("link", {
      name: "All Teams",
    })
  ).toBeInTheDocument();
  expect(
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    within(container.querySelector(`#${menuId}`)!).getByRole("button", {
      name: "Login",
    })
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: "Open main menu" }));
  await waitFor(() =>
    expect(
      screen.getByRole("button", { name: "Open main menu" })
    ).toHaveAttribute("aria-controls")
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
        .getAttribute("aria-controls")
    ).not.toBeNull()
  );
  const menuId = screen
    .getByRole("button", { name: "Open user menu" })
    .getAttribute("aria-controls");
  expect(
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    within(container.querySelector(`#${menuId}`)!).getByRole("menuitem", {
      name: "Login",
    })
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: "Open user menu" }));
  await waitFor(() =>
    expect(
      screen.getByRole("button", { name: "Open user menu" })
    ).toHaveAttribute("aria-controls")
  );
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector(`#${menuId}`)).toBeNull();
});

test("it renders menu links", () => {
  setup();
  expect(screen.getByRole("link", { name: "All Teams" })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Team Builder" })
  ).toBeInTheDocument();
});

describe("when logged in", () => {
  test("it renders user details & logout", async () => {
    const me = useTrainer();
    me.id = "TRA123";
    me.username = "example";
    me.picture = "https://example.com/picture.png";
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { ref } = require("vue");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useAuth0 as MockedFunction<any>).mockReturnValue({
      loginWithRedirect: vitest.fn(),
      logout: vitest.fn(),
      isAuthenticated: ref(false),
      error: ref(null),
    });
    setup();
    userEvent.click(screen.getByRole("button", { name: "Open main menu" }));

    await waitFor(() =>
      expect(
        screen
          .getByRole("button", { name: "Open main menu" })
          .getAttribute("aria-controls")
      ).not.toBeNull()
    );

    expect(screen.getByText("example")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
  });
});
